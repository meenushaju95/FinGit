# Generated by Django 5.0 on 2024-06-27 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0013_fin_banktransactionhistory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fin_bankholder',
            name='ArithmeticErrormount',
        ),
        migrations.RemoveField(
            model_name='fin_bankholder',
            name='is_active',
        ),
        migrations.AddField(
            model_name='fin_bankholder',
            name='Amount',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
