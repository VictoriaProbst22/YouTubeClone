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

@api_view(['GET'])
def comment_detail(requst, pk):
    try:
        comment = Comments.objects.get(pk=pk)
        serializer = CommentsSerializer(comment)
        
        return Response(serializer.data)
    except Comments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)