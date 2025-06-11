from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from django.contrib.auth import login
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password

User = get_user_model()
def Home(request):
    return render(request, 'Her/Home.html')

def About(request):
    return render(request, 'Her/About.html')

def Groups(request):
    return render(request, 'Her/support.html')

def Skills(request):
    return render(request, 'Her/Skills.html')

def Events(request):
    return render(request, 'Her/Events.html')


@csrf_exempt  # Only use during testing — ideally remove it and use {% csrf_token %} in your form
def Register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        if not username or not password1:
            messages.error(request, 'Username and password are required.')
        elif User.objects.filter(username=username).exists():
            messages.error(request, 'Username already taken.')
        elif password1 != password2:
            messages.error(request, 'Passwords do not match.')
        else:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password1  # automatically hashed
            )
            login(request, user)
            messages.success(request, 'Registration successful!')
            return redirect('Home')  # Use a named URL pattern, not a template path

    return render(request, 'Her/RegisterPage.html')

@csrf_exempt
def Signin(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        username = request.POST.get('username')

        if not User.objects.filter(username=username).exists():
            messages.error(request, 'User does not exist. Please register first.')
        elif form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, f'Welcome back, {user.username}!')
            return redirect('Home')
        else:
            messages.error(request, 'Invalid username or password.')
    else:
        form = AuthenticationForm()
    return render(request, 'Her/SigninPage.html', {'form': form})

def Blogs(request):
    return render(request, 'Her/Blogs.html')

def privacy(request):
    return render(request, 'Her/privacy.html')
