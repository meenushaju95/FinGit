# Generated by Django 5.0.6 on 2024-06-14 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0005_fin_items_fin_cnotification_item_fin_items_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fin_items',
            name='purchase_description',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='fin_items',
            name='sales_description',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
