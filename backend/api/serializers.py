from rest_framework import serializers
from .models import ContactInquiry, Service, Project, Client, Subscriber


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['id', 'name', 'email', 'company', 'message', 'status', 'created_at']
        read_only_fields = ['id', 'status', 'created_at']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'label', 'count', 'order']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'category', 'image', 'image_url', 'tags', 'order']


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name', 'description', 'order']


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ['id', 'email', 'created_at']
        read_only_fields = ['id', 'created_at']
