# Generated by Django 5.0.6 on 2024-06-10 08:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0003_fin_chart_of_account_fin_company_payment_terms_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fin_CNotification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(blank=True, max_length=255, null=True)),
                ('Discription', models.CharField(blank=True, max_length=255, null=True)),
                ('Noti_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('date_created', models.DateField(auto_now_add=True, null=True)),
                ('time', models.TimeField(auto_now_add=True, null=True)),
                ('status', models.CharField(default='New', max_length=100, null=True)),
                ('Company_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('Login_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
    ]
