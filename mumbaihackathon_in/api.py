# -*- coding: utf-8 -*-
# Copyright (c) 2015, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import re


@frappe.whitelist(allow_guest=True)
def register(fullname, email, organization, team_name=None, source="Form", registration_method=None):
	year = frappe.db.get_single_value("Hackathon Settings", "year")

	regi = frappe.new_doc("Registration")
	regi.fullname = fullname
	regi.email = email
	regi.team_name = team_name
	regi.organization = organization
	regi.source = source
	regi.registration_method = registration_method
	regi.year = year

	try:
		regi.save()
		return "✓ Registration was successful"
	except:
		return "✘ You have already registered"
