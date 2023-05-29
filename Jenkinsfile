pipeline {
    agent any
    stages {
        stage('SCM - Checkout') {
            steps {
                git credentialsId: 'jenkins-ssh', url: 'https://github.com/adam-glab/ZTI_final'
            }
        }
        stage('Verify'){
            steps {
                sh '''
                    docker info
                    docker version
                    docker compose version
                '''
            }
        }
        stage('Prune'){
            steps{
                sh 'docker compose down --remove-orphans -v'
                sh 'docker compose ps'
                sh 'docker system prune -a --volumes -f'
            }
        }
        stage('Build'){
            steps {
                sh 'docker compose build'
                sh 'docker compose ps'
            }
        }
        stage('Run'){
            steps {
                sh 'docker compose up -d'
                sh 'docker compose ps'
            }
        }
    }
}
