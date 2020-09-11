from firebase import firebase  
firebase = firebase.FirebaseApplication('https://animal-detection-system.firebaseio.com/', None)  
data =  { 'img': 'Vivek',  
          'name': 'image',  
          }  
result = firebase.post('/animal-detection-system/courses/',data)  
print(result) 
