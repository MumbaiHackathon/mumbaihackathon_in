def get_context(context):
	winners = [{
		"project_name": "Briefly",
		"project_descp": "Source based news network",
		"github_url":"https://github.com/MumbaiHackathon/Briefly",
		"image_url":"/assets/mumbaihackathon_in/imagesi/2018/Breifly.png",
		"team_members": [
			"Chirag Shetty",
			"Neel Shah",
			"Shivam Pawase",
			"Nishchith Shetty"
		]
	}]

	first_runnerups = [{
		"project_name": "Froogle Doodle",
		"project_descp": "Doodle anywhere, anytime with anything!",
		"github_url":"https://github.com/MumbaiHackathon/frugal-doodle",
		"image_url":"/assets/mumbaihackathon_in/images/2018/froogle-doodle.png",
		"team_members": [
			"Arpita Karkera",
			"Priya Nayak",
			"Sunaina Punyani",
			"Piyusha Sawant"
			"Deep Kawa"
		]
	}]

	second_runnerups = [{
		"project_name": "Crypto Doc",
		"project_descp": "Storing personal identification documents on blockchain",
		"image_url": "/assets/mumbaihackathon_in/images/2018/default.png",
		"github_url":"https://github.com/MumbaiHackathon/CryptoDoc",
		"team_members": [
			"Saurav Kanchan",
			"Yash Puthran",
			"Jatin Parab",
			"Owais Khan"
		]
		}, {
		"project_name": "Penetration Testing Mobile App",
		"image_url": "/assets/mumbaihackathon_in/images/2018/default.png",
		"github_url":"https://github.com/MumbaiHackathon/mumbai-hackathon",
		"team_members": [
			"Rahul Gupta",
			"Aniket Bharti",
			"Vijay Jha",
			"Tejas Barambe"
		]
		}
	}]

	context.winners = winners
	context.first_runnerups = first_runnerups
	context.second_runnerups = second_runnerups
