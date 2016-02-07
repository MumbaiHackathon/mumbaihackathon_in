# -*- coding: utf-8 -*-
# Copyright (c) 2015, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import re
from frappe.utils import validate_email_add

@frappe.whitelist(allow_guest=True)
def register(fullname, email, organization):
	validate_email_add(email.strip(), True)
	
	if not frappe.get_list("Registration", filters={"email":email}):
		if re.match(r"^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$", email):
			regi = frappe.new_doc("Registration")
			regi.fullname= fullname
			regi.email= email
			regi.organization= organization
			regi.save()
			return ("Registration was successful")
		else:
			return ("Please enter a valid email")
	else:
		return ("You have already registered")