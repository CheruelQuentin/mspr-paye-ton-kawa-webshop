# Deploy

To deploy the app run the following script:

1. Build

```
gcloud builds submit --tag gcr.io/mspr-payetonkawa-95a92/webshop  
```

2. Add to GCP
```
gcloud run deploy mspr-payetonkawa-95a92 
    --image gcr.io/mspr-payetonkawa-95a92/webshop  
    --platform managed  
    --region us-central1  
    --allow-unauthenticated
```
