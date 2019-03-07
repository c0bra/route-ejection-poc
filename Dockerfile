FROM node:10-slim

ARG app
ENV APP ${app}

RUN apt-get -y update \
	&& apt-get install -y git

# Only for app-new
RUN if [ "$APP" = "new" ]; then \
      yarn global add @vue/cli -g ; \
    else \
      yarn global add vue-cli ; \
    fi

COPY ./app-${app} /app

WORKDIR /app

RUN apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN npm install

EXPOSE 8080

USER node

# switch to npm if you chose it as package manager
CMD ["yarn", "serve"]