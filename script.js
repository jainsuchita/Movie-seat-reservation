var app = angular
			.module("myModule", [])
			.controller("myController", function($scope, $filter){
				var seats = 
				[
					{
						row:"A",
						columns: 
						[
							{col:"A1" ,status : "available" },
							{col:"A2" ,status : "available" },
							{col:"A3" ,status : "unavailable" },
							{col:"A4" ,status : "unavailable" },
							{col:"A5" ,status : "unavailable" },
							{col:"0"  ,status : "invalid" },
							{col:"0"  ,status : "invalid" },
							{col:"A6" ,status : "available" },
							{col:"0"  ,status : "invalid" },
							{col:"A7" ,status : "available" },
							{col:"A8" ,status : "available" },
							{col:"A9" ,status : "available" },
							{col:"A10",status : "available" },
							{col:"A11",status : "available" },
							{col:"A12",status : "available" }
						]
					},
					{
						row:"B",
						columns: 
						[
							{col:"B1" , status : "available" },
							{col:"B2" , status : "available" },
							{col:"B3" , status : "available" },
							{col:"B4" , status : "available" },
							{col:"B5" , status : "available" },
							{col:"0"  , status : "invalid" },
							{col:"0"  , status : "invalid" },
							{col:"B6" , status : "available" },
							{col:"0"  , status : "invalid" },
							{col:"B7" , status : "available" },
							{col:"B8" , status : "available" },
							{col:"B9" , status : "available" },
							{col:"B10", status : "available" },
							{col:"B11", status : "available" },
							{col:"B12", status : "available" }
							
						]
					},
					{
						row:"C",
						columns: 
						[
							{col:"C1"  , status: "available"},
							{col:"C2"  , status: "available"},
							{col:"C3"  , status: "unavailable"},
							{col:"C4"  , status: "unavailable"},
							{col:"C5"  , status: "unavailable"},
							{col:"0"   , status: "invalid"},
							{col:"0"   , status: "invalid"},
							{col:"C6"  , status: "available"},
							{col:"0"   , status: "invalid"},
							{col:"C7"  , status: "available"},
							{col:"C8"  , status: "available"},
							{col:"C9"  , status: "available"},
							{col:"C10" , status: "available"},
							{col:"C11" , status: "available"},
							{col:"C12" , status: "available"}
						]
					},
					{
						row:"D",
						columns: 
						[
							{col:"D1" ,status : "available"},
							{col:"D2" ,status : "available"},
							{col:"D3" ,status : "unavailable"},
							{col:"D4" ,status : "unavailable"},
							{col:"D5" ,status : "available"},
							{col:"0"  ,status : "invalid"},
							{col:"0"  ,status : "invalid"},
							{col:"D6" ,status : "available"},
							{col:"0"  ,status : "invalid"},
							{col:"D7" ,status : "available"},
							{col:"D8" ,status : "available"},
							{col:"D9" ,status : "available"},
							{col:"D10",status : "available"},
							{col:"D11",status : "available"},
							{col:"D12",status : "available"}
						]
					},
					{
						row:"E",
						columns: 
						[
							{col:"E1" , status : "available"},
							{col:"E2" , status : "available"},
							{col:"E3" , status : "available"},
							{col:"E4" , status : "available"},
							{col:"E5" , status : "available"},
							{col:"0"  , status : "invalid"},
							{col:"0"  , status : "invalid"},
							{col:"E6" , status : "available"},
							{col:"0"  , status : "invalid"},
							{col:"E7" , status : "available"},
							{col:"E8" , status : "available"},
							{col:"E9" , status : "available"},
							{col:"E10", status : "available"},
							{col:"E11", status : "unavailable"},
							{col:"E12", status : "unavailable"}
						]
					}
					
				];

				$scope.columns = [{col:"1"}, {col:"2"}, {col:"3"}, {col:"4"}, {col:"5"}, {col:"0"}, {col:"0"}, {col:"6"}, {col:"0"}, {col:"7"}, {col:"8"}, {col:"9"}, {col:"10"}, {col:"11"}, {col:"12"}];

				var users = 
				[
					{
						name: "James X",
						noOfSeats : 2,
						seats: ["E11", "E12"]
					},

					{
						name: "Creat dunf",
						noOfSeats : 3,
						seats: ["A3", "A4", "A5"]
					},

					{
						name: "sante mary",
						noOfSeats : 5,
						seats: ["C3", "C4", "C5", "D3", "D4"]
					}
				];

				$scope.users = users;
				$scope.arrayToString = function(string){
			        return string.join(", ");
			    };
				$scope.seats = seats; 
				// $scope.seatColorClass = "";
				$scope.NoOfSeats = 1; 
				$scope.count = 0;
				$scope.disabled = true;
				$scope.userName = "";
				$scope.showLayout = false;  // Make it false
				$scope.ConfirmButtonClicked = false;

				var user = 
				{
					name      :" ",
					noOfSeats : 0,
					seats     : [] 
				};

				$scope.user = user;


				$scope.SetSelected = function()
				{	
					// Alert if red seat is clicked..
				  	if (this.column.status === "unavailable")
				  	{	
				  		alert("Booked!");
				  		return;
				  	}

					// Alert if user tries to select more than what he selected earlier..
					else if($scope.count >= $scope.NoOfSeats && this.column.status === "available")
				  	{
				  		alert("Number of seats exceeded!");
				  		return;
				  	}

				  	//Store the username, NoOfSeats and seats..
				  	$scope.user.name = $scope.userName;
					$scope.user.noOfSeats = $scope.NoOfSeats;
				  	
					//Change the color of seats.. Selecting the seat
					if (this.column.status === "available")
					{
						$('#' + this.column.col).addClass("seat-green");
						this.column.status = "selected";
						$scope.count++;
						$scope.user.seats.push(this.column.col);

					}
					//De-selecting the seat
				    else if (this.column.status === "selected")
				    {
						$('#' + this.column.col).removeClass("seat-green");
						this.column.status = "available";
						$scope.count--;
				    	$scope.user.seats.splice($scope.user.seats.indexOf(this.column.col),1);
				    	console.log($scope.user.seats);
				    }
				   
				  	// Enable the 'Confirm the selection' button when user selects all the required seats
				  	if($scope.count === $scope.NoOfSeats)
				  	{
				  		$scope.disabled = false;
				  	}
				  	else
				  	{
				  		$scope.disabled = true;
				  	}
				  	
				}

				$scope.resetSeatLayout = function()
				{
					// Reset the count
					$scope.count = 0;

					// Disable the 'Confirm the selection' button
					$scope.disabled = true; 

					// Hide 'Book another seat' button..
					$scope.ConfirmButtonClicked = false;

					angular.forEach($scope.user.seats, function(value, key)
					{
     					// adding red-seat for the booked one..
     					$('#' + value).removeClass('seat-green');
     					
     					var first_char = value.charAt(0);
     					var sec_char = value.charAt(1);

     					// Find the index of first_char
     					var i,j;
     					var index_row;
     					var index_col;
     					var len_row = $scope.seats.length;
     					for (var i = 0; i < len_row; i++) 
     					{
     						var item = $scope.seats[i];
     						if(item.row === first_char)
     						{
     							index_row = i;
     							var len_col = item.columns.length;
     							for (j = 0; j < len_col ; j++)
     							{
     								var item_col = item.columns[j];
     								if(item_col.col === value)
     								{
     									index_col = j;
     									break;
     								}
     							};
     						}
     					};

     					var status = $scope.seats[index_row].columns[index_col].status;
     					// make the booked seats status to 'unavailable'
     					$scope.seats[index_row].columns[index_col].status = 'available';

     					var sta2  =$scope.seats[index_row].columns[index_col].status;

     					console.log("status " + status);
     					console.log("sta2 " + sta2);
     					console.log("index " + index_row +  ' ' + index_col);
     				})

					// Empty the user.seats
					$scope.user.seats = [];					
				}

				$scope.enableLayout = function()
				{
					var i,j;
 					var available_seats = 0;
 					var len_row = $scope.seats.length;
 					for (var i = 0; i < len_row; i++) 
 					{
 						var item = $scope.seats[i]; 						
						var len_col = item.columns.length;
						for (j = 0; j < len_col ; j++)
						{
							var item_col = item.columns[j];
							if(item_col.status === 'available')
							{
								available_seats++;
							}
						};
					};

					// The user should not be able to ask for seats more than what is available. 
					if(available_seats < $scope.NoOfSeats)
					{
						alert("Maximum seat available: " + available_seats);
					}
					else if($scope.NoOfSeats > 0)
					{
						$scope.showLayout = true;

					}
				}

				$scope.confirmUser = function()
				{
					$scope.users.push($scope.user);
					angular.forEach($scope.user.seats, function(value, key)
					{
     					// adding red-seat for the booked one..
     					$('#' + value).removeClass('seat-green').addClass('seat-red');
     					
     					var first_char = value.charAt(0);
     					var sec_char = value.charAt(1);

     					// var index_row = first_char - 'A';
     					var index_col = sec_char - 1;

     					// Find the index of first_char
     					var i,j;
     					var index_row;
     					var len_row = $scope.seats.length;
     					for (var i = 0; i < len_row; i++) 
     					{
     						var item = $scope.seats[i];
     						if(item.row === first_char)
     						{
     							index_row = i;
     							var len_col = item.columns.length;
     							for (j = 0; j < len_col ; j++)
     							{
     								var item_col = item.columns[j];
     								if(item_col.col === value)
     								{
     									index_col = j;
     									break;
     								}
     							};
     						}
     					};

     					// make the booked seats status to 'unavailable'
     					$scope.seats[index_row].columns[index_col].status = 'unavailable';
     				})
					$scope.disabled = true;
 					$scope.ConfirmButtonClicked = true;
				}

				$scope.bookAnotherSeat = function()
 				{
 					$scope.showLayout = false;
					
					// Reset the count
					$scope.count = 0;

					// Disable the 'Confirm the selection' button
					$scope.disabled = true; 

					// Hide 'Book another seat' button..
					$scope.ConfirmButtonClicked = false;

     				// Empty the user.seats
					$scope.user = 
					{
						name      :" ",
						noOfSeats : 0,
						seats     : [] 
					}; 				
				}

			})






