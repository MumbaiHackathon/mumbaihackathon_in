# -*- coding: utf-8 -*-
# Copyright (c) 2015, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import re
import json


@frappe.whitelist(allow_guest=True)
def register(values):
	values = json.loads(values)

	year = frappe.db.get_single_value("Hackathon Settings", "year")
	regi = frappe.new_doc("Registration")
	regi.fullname = values['fullname']
	regi.email = values['email']
	regi.team_name = values['team_name']
	regi.organization = values['organization']
	regi.source = values['source']
	regi.registration_method = values['registration_method']
	regi.team_type = values['team_type']
	regi.year = year
	regi.fullname_2 = values['fullname_2']
	regi.email_2 = values['email_2']
	regi.fullname_3 = values['fullname_3']
	regi.email_3 = values['email_3']
	regi.fullname_4 = values['fullname_4']
	regi.email_4 = values['email_4']
	regi.fullname_5 = values['fullname_5']
	regi.email_5 = values['email_5']

	try:
		regi.save()
		return "✓ Registration was successful"
	except:
		return "✘ You have already registered"
