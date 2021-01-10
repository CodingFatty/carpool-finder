import requests
from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PersonSerializer

# Create your views here.

@api_view(['POST'])
def login(request):
    # serializer = PersonSerializer(data=request.data)
    # if serializer.is_valid():
    #     serializer.save()
    apptoken = '3480726652047192|XavpAbpiyxqr-YLNPyAUbS2drIc'
    usertoken = request.data["token"]
    r = requests.get(f'https://graph.facebook.com/debug_token?input_token={usertoken}&access_token={apptoken}')
    print(f'this is {r.json()}')
    return Response('ok')