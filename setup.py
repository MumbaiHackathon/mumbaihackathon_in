# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

version = '0.0.1'

setup(
    name='mumbaihackathon_in',
    version=version,
    description='Website for Mumbai Hackathon',
    author='Neil Lasrado',
    author_email='neil@frappe.io',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=("frappe",),
)
