import firebase_admin
import pyrebase
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import db
global storage
cred = credentials.Certificate('C:/tensorflow1/models/research/object_detection/animal-detection-system-7b633d2de7af.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
config={
        "apiKey": "AIzaSyA__LKHjmZm5NhbFYVbLLqAvZFCSBV5NG4",
        "authDomain": "animal-detection-system.firebaseapp.com",
        "databaseURL": "https://animal-detection-system.firebaseio.com",
        "projectId": "animal-detection-system",
        "storageBucket": "animal-detection-system.appspot.com",
        "messagingSenderId": "265423607680",
        "appId": "1:265423607680:web:6cffe0a7d24e8b7b2c9365",
        "measurementId": "G-04F4R4Y8GP"
        }
firebase=pyrebase.initialize_app(config)
storage=firebase.storage()
def upload(image_path,id,name):
        cloud_storage_path='images/'+name
        path_local=image_path
        url=storage.child(cloud_storage_path).put(path_local)
        img_url=storage.child(cloud_storage_path).get_url(url['downloadTokens'])
        print(img_url)
        update(img_url,id,name)
        
def update(img_url,id,name):
        doc_ref = db.collection(u'courses').document(id)
        doc_ref.set({
            u'img': img_url,
            u'name': name,
            u'status':1,
})
def read():
        users_ref = db.collection(u'courses')
        docs = users_ref.stream()
        my_dict = [[el.id,el.to_dict()] for el in docs]
        if (len(my_dict)>0):
                for i in my_dict:
                        if i[1]['status']==0:
                                id=i[0]
                                url=i[1]['img']
                                status=i[1]['status']
                                return [url,id,status];
                return None;
        else:
                return None;
        #print(users_ref.get().to_dict())
#print(read());
#upload('C:/Users/Tarun/Desktop/0.jpg',1,'tarun');
