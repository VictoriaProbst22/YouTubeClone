from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommentsSerializer
from .models import Comments

# Create your views here.
@api_view(['GET'])
def comments_list(request):
    comments = Comments.objects.all()
    serializer = CommentsSerializer(comments, many=True)

    return Response(serializer.data)