# Generated by Django 5.0 on 2024-07-01 06:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0018_rename_comment_text_fin_bankholdercomment_comment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='fin_bankholder',
            name='bank',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Finsys_App.fin_banking'),
        ),
    ]
