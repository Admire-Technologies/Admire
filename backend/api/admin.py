from django.contrib import admin
from .models import ContactInquiry, Service, Project, Client, Subscriber


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'company', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['name', 'email', 'company']
    list_editable = ['status']
    readonly_fields = ['created_at']
    ordering = ['-created_at']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['label', 'count', 'order', 'is_active']
    list_editable = ['count', 'order', 'is_active']
    ordering = ['order']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'order', 'is_active', 'created_at']
    list_filter = ['category', 'is_active']
    list_editable = ['order', 'is_active']
    search_fields = ['title']
    ordering = ['order']


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'order', 'is_active']
    list_editable = ['order', 'is_active']
    search_fields = ['name']
    ordering = ['order']


@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ['email', 'created_at']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
