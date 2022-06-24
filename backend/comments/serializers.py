from pyexpat import model
from rest_framework import serializers
from .models import Comments

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1