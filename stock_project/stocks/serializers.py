from rest_framework import serializers
from .models import Stock

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id', 'name', 'ticker_symbol', 'price']

    
    def validate_price(self,value):
        if value < 0:
            raise serializers.ValidationError("Price should be greater than 0")
        return value