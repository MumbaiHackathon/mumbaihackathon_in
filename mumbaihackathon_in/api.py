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
	regi.organization = values['organization']
	regi.year = year

	if 'team_name' in values:
		regi.team_name = values['team_name']
	if 'source' in values:
		regi.source = values['source']
	if 'registration_method' in values:
		regi.registration_method = values['registration_method']
	if 'team_type' in values:
		regi.team_type = values['team_type'].capitalize()
	if 'fullname_2' in values:
		regi.fullname_2 = values['fullname_2']
	if 'email_2' in values:
		regi.email_2 = values['email_2']
	if 'fullname_3' in values:
		regi.fullname_3 = values['fullname_3']
	if 'email_3' in values:
		regi.email_3 = values['email_3']
	if 'fullname_4' in values:
		regi.fullname_4 = values['fullname_4']
	if 'email_4' in values:
		regi.email_4 = values['email_4']
	if 'fullname_5' in values:
		regi.fullname_5 = values['fullname_5']
	if 'email_5' in values:
		regi.email_5 = values['email_5']

	try:
		regi.save()
		return "✓ Registration was successful"
	except:
		return "✘ You have already registered"
