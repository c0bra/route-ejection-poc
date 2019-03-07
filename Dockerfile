FROM node:10

ARG appdir
ENV APPDIR ${appdir}

RUN apt-get -y update \
	&& apt-get install -y git

# Only for app-new
RUN if [ "$APPDIR" = "/app-new" ]; then \
      yarn global add @vue/cli -g ; \
    else \
      yarn global add vue-cli ; \
    fi

WORKDIR ${appdir}

RUN apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN npm install

EXPOSE 8080

USER node

# switch to npm if you chose it as package manager
CMD ["yarn", "serve"]