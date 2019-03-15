from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Hackathon Registration"),
			"icon": "octicon octicon-briefcase",
			"items": [
				{
					"type": "doctype",
					"name": "Registration",
				},
				{
					"type": "doctype",
					"name": "Team",
				},
				{
					"type": "doctype",
					"name": "Room",
				},
			]
		},
		{
			"label": _("Evaluation"),
			"icon": "octicon octicon-briefcase",
			"items": [
				{
					"type": "doctype",
					"name": "Evaluation",
				},
				{
					"type": "doctype",
					"name": "Evaluation Round",
				},
                {
					"type": "doctype",
					"name": "Round Criteria",
				}
			]
		},
	]
