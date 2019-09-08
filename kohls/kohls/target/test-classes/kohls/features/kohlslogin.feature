Feature: Login into kohls account



Scenario Outline:Login to account with credentials
		Given user navigates to "<url>"
		And user clicks on Account button
		And user clicks on signin button
		And user enters the "<emailaddress>" email address
		And user enters the "<password>" 
		When user clicks on sign in button
		Then the user should be presented with the following pompt alert "<message>"
		
		Examples:

	|	url					 |	emailaddress	    |	password	|	message				|
	|https://www.kohls.com/  | ng84@gmail.com       | webdriver123 	| validation failed     |
	|https://www.kohls.com/  | ng84201@gmail.com    | webdriver  	| validation succeeded	|
	