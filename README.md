Inshuti Y'Umubyeyi is a web application designed to support pregnant women in Rwanda. It allows users to join support groups, access skill training resources, and attend events in which they can showcase what they learned from the comfort of their homes.

git clone https://github.com/pshemssa/Her.git
cd Her
python -m venv env
.\env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 
