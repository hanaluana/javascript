import requests

base_url = "https://jsonplaceholder.typicode.com"

response = requests.get(base_url + "/posts")

headers = {}
data = {}

#print(response)
#print(response.text) # body는 .text로 사용
res = response.json()
# print(res[0].get('title'))

