# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Evaluation(Document):
	pass
	# def validate(self):
	# 	evaluations = self.get_all_children()
	# 	total = 0
	# 	for entry in evaluations:
	# 		if entry.score > 10:
	# 			frappe.throw("Please give a score between 0 to 10 only")
	# 		total += entry.score
	# 	self.total = total

