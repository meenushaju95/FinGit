# Generated by Django 5.0 on 2024-06-26 08:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0011_fin_banking_fin_bankinghistory'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fin_BankTransactions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_type', models.CharField(blank=True, max_length=255, null=True)),
                ('to_type', models.CharField(blank=True, max_length=255, null=True)),
                ('amount', models.IntegerField(default=0, null=True)),
                ('adjustment_date', models.DateTimeField(null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('transaction_type', models.CharField(blank=True, max_length=255, null=True)),
                ('adjustment_type', models.CharField(blank=True, max_length=255, null=True)),
                ('current_balance', models.IntegerField(default=0, null=True)),
                ('bank_to_bank', models.IntegerField(default=0, null=True)),
                ('banking', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_banking')),
                ('company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_company_details')),
                ('login_details', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_login_details')),
            ],
        ),
    ]
