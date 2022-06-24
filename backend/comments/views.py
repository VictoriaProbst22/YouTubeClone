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
        if serializer.is_valid() == True:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors)