# Generated by Django 3.2.9 on 2021-12-05 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_remove_review_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='name',
            field=models.CharField(default=None, max_length=20),
        ),
    ]