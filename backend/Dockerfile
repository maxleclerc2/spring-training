FROM eclipse-temurin:17-alpine
COPY ./target/spring-training-0.0.1-SNAPSHOT.jar /usr/local/lib/app.jar
EXPOSE 25000
ENTRYPOINT ["java", "-jar", "/usr/local/lib/app.jar"]
