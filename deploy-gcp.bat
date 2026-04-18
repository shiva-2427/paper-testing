@echo off
echo ===========================================
echo 🚀 Authenticating with Google Cloud...
echo ===========================================
call "C:\Users\tripa\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd" auth login

echo ===========================================
echo ⚙️ Linking Project ID: project-ef8dc188-66b9-4ab2-b00
echo ===========================================
call "C:\Users\tripa\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd" config set project project-ef8dc188-66b9-4ab2-b00

echo ===========================================
echo ☁️ Deploying to Google Cloud Run...
echo ===========================================
call "C:\Users\tripa\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd" run deploy creator-os --source . --region us-central1 --allow-unauthenticated

echo Deployment Complete! Here is your live URL!
pause
