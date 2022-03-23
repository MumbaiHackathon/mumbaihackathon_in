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
	member1 = {'name1': values['fullname'], 'email': values['email']}
	regi.append('members', member1)
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

	for i in range(2,6):
		f = 'fullname_'+ str(i)
		e = 'email_'+ str(i)
		if f in values and e in values:
			m = {'name1': values[f], 'email': values[e]}
			if m['name1'] or m['email']:
				regi.append("members", m)

	try:
		regi.save()
		return "✓ Registration was successful"
	except:
		return "✘ You have already registered"
