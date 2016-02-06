# -*- coding: utf-8 -*-
# Copyright (c) 2015, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.utils import validate_email_add

@frappe.whitelist(allow_guest=True)
def register(fullname, email, organization):
	validate_email_add(email.strip(), True)
	
	if not frappe.get_list("Registration", filters={"email":email}):
		regi = frappe.new_doc("Registration")
		regi.fullname= fullname
		regi.email= email
		regi.organization= organization
		regi.save()
		return ("Registration was Success")
	else:
		return ("You have already registered")