
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommentsSerializer
from .models import Comments
from rest_framework import status


# Create your views here.
@api_view(['GET', 'POST'])
def comments_list(request):
    if request.method == 'GET':
        comments = Comments.objects.all()
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
def comment_detail(request, pk):
    comment = get_object_or_404(Comments, pk=pk)
    if request.method == 'GET':
        serializer = CommentsSerializer(comment);
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CommentsSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)