# Generated by Django 5.0 on 2024-06-29 09:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Finsys_App', '0017_remove_fin_bankholder_date_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fin_bankholdercomment',
            old_name='comment_text',
            new_name='comment',
        ),
        migrations.RemoveField(
            model_name='fin_bankholdercomment',
            name='LoginDetails',
        ),
        migrations.RemoveField(
            model_name='fin_bankholdercomment',
            name='created_at',
        ),
    ]