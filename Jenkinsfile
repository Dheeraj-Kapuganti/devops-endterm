pipeline {
    agent any

    stages {

            
        stage('Build') {
            steps {
                bat 'docker build -t myapp:v1 .'
            }
        }
    }
}