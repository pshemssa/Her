from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from .views import EventListCreateView

urlpatterns =[
    path('Home', views.Home, name='home'),
    path('Register', views.Register, name='Register'),
    path('Login', views.Signin, name='Login'),
    path('About', views.About, name='about'),
    path('Skills', views.Skills, name='skills'),
    path('Events', views.Events, name='events'), 
    path('Groups', views.Groups, name='Groups'), 
    path('Privacy', views.privacy, name='Privacy'), 
    path('Blogs', views.Blogs, name='Blogs'),    
    path('events', EventListCreateView.as_view(), name='event-list-create'),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
