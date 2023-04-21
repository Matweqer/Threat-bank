.PHONY: build-front
build-front:
	ssh -i ~/.ssh/id_rsa firstuser@172.10.0.8  \
	"cd /opt/Threat-bank; \
	git pull; \
	docker build -t threats-frontend-image:latest ."

.PHONY: deploy-front
deploy-front:
	ssh -i ~/.ssh/id_rsa firstuser@172.10.0.8  \
	"cd /opt/ci-helpers; \
	docker stop threats-frontend; \
	docker rm threats-frontend;\
	docker-compose --profile frontend up -d;"
