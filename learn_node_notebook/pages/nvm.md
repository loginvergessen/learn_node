- # Node Version Manager
- https://github.com/nvm-sh/nvm
- ## installation
	- ### mac
		- `brew install nvm`
		- add the following to the `.zshrc`
			- ```bash
			  # node with brew
			  export NVM_DIR="$HOME/.nvm"
			    [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
			    [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
			  ```
- ## commands
	- ### check nvm version
		- `nvm --version`
	- ### list node version (installed)
		- `nvm ls`
	- ### install specific node version
		- `nvm install $VERSION`
	- ### install the latest version
		- `nvm install node`
	- ### switch between versions
		- `nvm use $VERISON`
	- ### set default version
		- `nvm alias default $VERSION`
	- ### update
		- ```bash
		  #Latest version
		  nvm install node --reinstall-packages-from=node
		  
		  #stable version
		  nvm install "lts/*" --reinstall-packages-from="$(nvm current)"
		  ```
	- ### remove node version
		- `nvm uninstall $VERSION`
-