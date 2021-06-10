var RunCommand = {
   commands: [],
   prefix: "",
   run_command: function(command) {
      for (var i = 0; i < this.commands.length; ++i) {
	  if (this.commands[i] == null) {
	  
	  } else {
	      if (command == this.prefix+this.commands[i].command) {
		     this.commands[i].do();
		  }
		}
	  }
   },
   create_command: function(name, func) {
     this.commands.push({command: name, do: func});
   },
   remove_command: function(name) {
      for (var i = 0; i < this.commands.length; ++i) {
	     if (name == this.commands[i].command) {
		 this.commands[i] = null;
		 }
	  }
   },
   run_commandSes: function() {
      for (var i = 0; i < this.commands.length; ++i) {
	  if (this.commands[i] == null) {
	  
	  } else {
	      if (command == this.prefix+this.commands[i].command) {
		     this.commands[i].do();
		  }
		}
	  }

     
   }
}

RunCommand.create_command("hello", function() {
   console.log("Hello World!");
});
