# Generated by Django 5.0 on 2024-06-26 07:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0010_fin_bankholder_fin_bankholdercomment_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fin_Banking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bank_name', models.CharField(blank=True, max_length=255, null=True)),
                ('account_number', models.CharField(blank=True, max_length=255, null=True)),
                ('ifsc_code', models.CharField(blank=True, max_length=255, null=True)),
                ('branch_name', models.CharField(blank=True, max_length=255, null=True)),
                ('opening_balance_type', models.CharField(blank=True, max_length=255, null=True)),
                ('opening_balance', models.IntegerField(default=0, null=True)),
                ('date', models.DateTimeField(null=True)),
                ('current_balance', models.IntegerField(default=0, null=True)),
                ('bank_status', models.CharField(blank=True, max_length=255, null=True)),
                ('company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('login_details', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
        migrations.CreateModel(
            name='Fin_BankingHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('action', models.CharField(blank=True, max_length=255, null=True)),
                ('banking', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_banking')),
                ('company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('login_details', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
    ]