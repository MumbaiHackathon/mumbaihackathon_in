# -*- coding: utf-8 -*-
# Copyright (c) 2015, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import re


@frappe.whitelist(allow_guest=True)
def register(fullname, email, organization):
	year = frappe.utils.today()[:4]

	regi = frappe.new_doc("Registration")
	regi.fullname = fullname
	regi.email = email
	regi.organization = organization
	regi.year = year

	try:
		regi.save()
		return "✓ Registration was successful"
	except:
		return "✘ You have already registered"
