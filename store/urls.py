from django.urls import path
from store.views import FilesViews

app_name="store"

urlpatterns = [
    path('files_management/', FilesViews.files_management,name = "files_management"),
    path('search/', FilesViews.search_in_files,name = "search"),
    path('add_file/', FilesViews.add_file, name="add_file"),
]