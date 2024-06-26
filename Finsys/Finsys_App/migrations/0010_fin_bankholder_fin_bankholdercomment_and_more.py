# Generated by Django 5.0 on 2024-06-26 05:52

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0009_fin_cnotification_customers'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fin_BankHolder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Holder_name', models.CharField(blank=True, max_length=255, null=True)),
                ('Alias', models.CharField(blank=True, max_length=255, null=True)),
                ('phone_number', models.CharField(blank=True, max_length=10, null=True)),
                ('Email', models.EmailField(blank=True, max_length=255, null=True)),
                ('Account_type', models.CharField(choices=[('CC', 'Credit Card'), ('BA', 'Bank Account')], default='BA', max_length=20)),
                ('Set_cheque_book_range', models.BooleanField(default=False)),
                ('Enable_cheque_printing', models.BooleanField(default=False)),
                ('Set_cheque_printing_configuration', models.BooleanField(default=False)),
                ('Mailing_name', models.CharField(max_length=100)),
                ('Address', models.TextField(blank=True, max_length=255, null=True)),
                ('Country', models.CharField(blank=True, max_length=100, null=True)),
                ('State', models.CharField(choices=[('AN', 'Andaman and Nicobar Islands'), ('AP', 'Andhra Pradesh'), ('AR', 'Arunachal Pradesh'), ('AS', 'Assam'), ('BR', 'Bihar'), ('CH', 'Chhattisgarh'), ('DL', 'National Capital Territory of Delhi'), ('GA', 'Goa'), ('GJ', 'Gujarat'), ('HR', 'Haryana'), ('HP', 'Himachal Pradesh'), ('JK', 'Jammu and Kashmir'), ('LA', 'Ladakh'), ('JH', 'Jharkhand'), ('KA', 'Karnataka'), ('KL', 'Kerala'), ('MP', 'Madhya Pradesh'), ('MH', 'Maharashtra'), ('MN', 'Manipur'), ('ML', 'Meghalaya'), ('MZ', 'Mizoram'), ('NL', 'Nagaland'), ('OR', 'Odisha'), ('PB', 'Punjab'), ('RJ', 'Rajasthan'), ('SK', 'Sikkim'), ('TN', 'Tamil Nadu'), ('TG', 'Telangana'), ('TR', 'Tripura'), ('UT', 'Uttarakhand'), ('UP', 'Uttar Pradesh'), ('WB', 'West Bengal')], max_length=100)),
                ('Pin', models.CharField(max_length=6)),
                ('Pan_it_number', models.CharField(blank=True, max_length=10)),
                ('Registration_type', models.CharField(choices=[('regular', 'Regular'), ('composition', 'Composition'), ('consumer', 'Consumer'), ('unregistered', 'Unregistered')], default='unknown', max_length=20)),
                ('Gstin_un', models.CharField(blank=True, max_length=15)),
                ('Set_alter_gst_details', models.BooleanField(default=False)),
                ('Date', models.DateField(default=datetime.date.today)),
                ('ArithmeticErrormount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('Open_type', models.CharField(choices=[('CREDIT', 'CREDIT'), ('DEBIT', 'DEBIT')], default='unknown', max_length=20)),
                ('Swift_code', models.CharField(blank=True, max_length=11, null=True)),
                ('Bank_name', models.CharField(blank=True, max_length=20, null=True)),
                ('Ifsc_code', models.CharField(blank=True, max_length=15, null=True)),
                ('Branch_name', models.CharField(blank=True, max_length=20, null=True)),
                ('Account_number', models.CharField(blank=True, max_length=20, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('Company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('LoginDetails', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
        migrations.CreateModel(
            name='Fin_BankHolderComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', models.TextField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('Company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('Holder', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_bankholder')),
                ('LoginDetails', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
        migrations.CreateModel(
            name='Fin_BankHolderHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True, null=True)),
                ('action', models.CharField(blank=True, choices=[('Created', 'Created'), ('Edited', 'Edited')], max_length=20, null=True)),
                ('Company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('Holder', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_bankholder')),
                ('LoginDetails', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
    ]
