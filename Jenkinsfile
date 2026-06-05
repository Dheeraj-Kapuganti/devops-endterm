

pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps{
                bat 'scm checkout'
            }
        }
            
        stage('Build') {
            steps {
                bat 'docker build -t myapp:v1 .'
            }
        }
    }
}