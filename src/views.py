from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def products(request):
    return render(request, 'products.html')


def services(request):
    return render(request, 'services.html')


def blog(request):
    return render(request, 'blog.html')


def contact(request):
    return render(request, 'contact.html')


def team(request):
    return render(request, 'team.html')


def programmes(request):
    return render(request, 'programmes.html')


def video_gallery(request):
    return render(request, 'video-gallery.html')


def image_gallery(request):
    return render(request, 'image-gallery.html')


def donation(request):
    return render(request, 'donation.html')


def ourhistory(request):
    return render(request, 'ourhistory.html')


def store(request):
    return render(request, 'store.html')


def page_404(request, exception=None):
    return render(request, '404.html', status=404)

