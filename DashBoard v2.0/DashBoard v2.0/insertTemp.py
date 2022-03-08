import requests

if __name__ == '__main__':
    
	url  = "http://localhost:8080/postTemp=13.4"
	url += "&pool=1"
	url += "&year=2021"
	url += "&month=11"
	url += "&day=1"
	url += "&hour=11" 
	url += "&minute=00" 
	print(url)
	response = requests.get(url)
   
