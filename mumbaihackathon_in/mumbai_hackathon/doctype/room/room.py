# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Room(Document):
	pass

@frappe.whitelist()
def get_count(room_name):
	room = frappe.get_doc("Room", room_name)
	team_list = frappe.get_list("Team", filters={"assigned_room": room_name})
	occupied = 0
	for team in team_list:
		occupied += frappe.db.count("Team Participant", filters={"parent": team.name})
	print(room.capacity - occupied)
	return room.capacity - occupied
