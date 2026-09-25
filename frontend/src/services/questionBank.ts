import type { Question, QuestionOption } from '@/types';

// Comprehensive, authentic question bank for EVERY domain
// strictly 4 options (A, B, C, D) per question, question shuffling, option shuffling, and dynamic domain generation
const DOMAIN_QUESTIONS: Record<string, any[]> = {
  "ai-ml": [
    {
      "id": "ai-ml-1",
      "question_text": "Which learning paradigm relies on labeled training datasets consisting of input-output pairs?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-1-a",
          "option_text": "Supervised Learning",
          "is_correct": true
        },
        {
          "id": "ai-ml-1-b",
          "option_text": "Unsupervised Learning",
          "is_correct": false
        },
        {
          "id": "ai-ml-1-c",
          "option_text": "Reinforcement Learning",
          "is_correct": false
        },
        {
          "id": "ai-ml-1-d",
          "option_text": "Self-Supervised Clustering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-2",
      "question_text": "In Machine Learning, what does a model with \"high variance\" typically suffer from?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-2-a",
          "option_text": "Overfitting to training data",
          "is_correct": true
        },
        {
          "id": "ai-ml-2-b",
          "option_text": "Underfitting the underlying trend",
          "is_correct": false
        },
        {
          "id": "ai-ml-2-c",
          "option_text": "Inability to learn simple linear relationships",
          "is_correct": false
        },
        {
          "id": "ai-ml-2-d",
          "option_text": "Excessive training regularization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-3",
      "question_text": "Which activation function is defined as f(x) = max(0, x) and helps prevent vanishing gradients?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-3-a",
          "option_text": "ReLU (Rectified Linear Unit)",
          "is_correct": true
        },
        {
          "id": "ai-ml-3-b",
          "option_text": "Sigmoid",
          "is_correct": false
        },
        {
          "id": "ai-ml-3-c",
          "option_text": "Hyperbolic Tangent (Tanh)",
          "is_correct": false
        },
        {
          "id": "ai-ml-3-d",
          "option_text": "Softmax",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-4",
      "question_text": "What is the primary objective of L1 Regularization (Lasso) compared to L2 Regularization (Ridge)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-4-a",
          "option_text": "Promoting feature sparsity by driving irrelevant weights to exactly zero",
          "is_correct": true
        },
        {
          "id": "ai-ml-4-b",
          "option_text": "Penalizing large weights proportionally to their square without zeroing",
          "is_correct": false
        },
        {
          "id": "ai-ml-4-c",
          "option_text": "Accelerating learning rate decay in stochastic gradient descent",
          "is_correct": false
        },
        {
          "id": "ai-ml-4-d",
          "option_text": "Normalizing input feature distributions across min-max bounds",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-5",
      "question_text": "In classification metrics, how is Recall (Sensitivity) mathematically formulated?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-5-a",
          "option_text": "TP / (TP + FN)",
          "is_correct": true
        },
        {
          "id": "ai-ml-5-b",
          "option_text": "TP / (TP + FP)",
          "is_correct": false
        },
        {
          "id": "ai-ml-5-c",
          "option_text": "(TP + TN) / Total",
          "is_correct": false
        },
        {
          "id": "ai-ml-5-d",
          "option_text": "2 * (Precision * Recall) / (Precision + Recall)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-6",
      "question_text": "Which metric represents the harmonic mean of Precision and Recall?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-6-a",
          "option_text": "F1-Score",
          "is_correct": true
        },
        {
          "id": "ai-ml-6-b",
          "option_text": "ROC-AUC",
          "is_correct": false
        },
        {
          "id": "ai-ml-6-c",
          "option_text": "Mean Absolute Error (MAE)",
          "is_correct": false
        },
        {
          "id": "ai-ml-6-d",
          "option_text": "Cohen Kappa",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-7",
      "question_text": "What happens in Gradient Descent if the learning rate (alpha) is configured excessively high?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-7-a",
          "option_text": "The optimization algorithm can overshoot the global minimum and diverge",
          "is_correct": true
        },
        {
          "id": "ai-ml-7-b",
          "option_text": "The model takes an excessively long time to converge to the local minimum",
          "is_correct": false
        },
        {
          "id": "ai-ml-7-c",
          "option_text": "The gradients will permanently shrink to zero",
          "is_correct": false
        },
        {
          "id": "ai-ml-7-d",
          "option_text": "The loss function will instantly evaluate to negative infinity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-8",
      "question_text": "Which splitting criterion is commonly utilized in CART Decision Trees to evaluate node purity?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-8-a",
          "option_text": "Gini Impurity",
          "is_correct": true
        },
        {
          "id": "ai-ml-8-b",
          "option_text": "Root Mean Squared Log Error",
          "is_correct": false
        },
        {
          "id": "ai-ml-8-c",
          "option_text": "Cosine Similarity",
          "is_correct": false
        },
        {
          "id": "ai-ml-8-d",
          "option_text": "Hamming Distance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-9",
      "question_text": "How does Random Forest reduce model variance compared to individual decision trees?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-9-a",
          "option_text": "By aggregating predictions across decorrelated trees trained on bootstrap samples (Bagging)",
          "is_correct": true
        },
        {
          "id": "ai-ml-9-b",
          "option_text": "By sequentially fitting trees to the residuals of previous trees (Boosting)",
          "is_correct": false
        },
        {
          "id": "ai-ml-9-c",
          "option_text": "By pruning leaf nodes with high depth penalties",
          "is_correct": false
        },
        {
          "id": "ai-ml-9-d",
          "option_text": "By enforcing linear boundaries across all feature dimensions",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-10",
      "question_text": "Which ensemble method trains sequential weak learners where each subsequent tree corrects the residual errors of its predecessor?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-10-a",
          "option_text": "Gradient Boosting (e.g. XGBoost, LightGBM)",
          "is_correct": true
        },
        {
          "id": "ai-ml-10-b",
          "option_text": "Random Forest",
          "is_correct": false
        },
        {
          "id": "ai-ml-10-c",
          "option_text": "Extra Trees Classifier",
          "is_correct": false
        },
        {
          "id": "ai-ml-10-d",
          "option_text": "Voting Classifier with soft voting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-11",
      "question_text": "What is the purpose of the \"Kernel Trick\" in Support Vector Machines (SVM)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-11-a",
          "option_text": "Implicitly mapping non-linear data into higher-dimensional space where it becomes linearly separable",
          "is_correct": true
        },
        {
          "id": "ai-ml-11-b",
          "option_text": "Accelerating disk I/O when loading large image datasets",
          "is_correct": false
        },
        {
          "id": "ai-ml-11-c",
          "option_text": "Encrypting support vector coordinates for privacy-preserving computation",
          "is_correct": false
        },
        {
          "id": "ai-ml-11-d",
          "option_text": "Normalizing feature matrices using fast GPU kernels",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-12",
      "question_text": "In K-Means clustering, what does the algorithm iteratively minimize?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-12-a",
          "option_text": "Inertia (Within-Cluster Sum of Squares)",
          "is_correct": true
        },
        {
          "id": "ai-ml-12-b",
          "option_text": "Mutual Information between clusters",
          "is_correct": false
        },
        {
          "id": "ai-ml-12-c",
          "option_text": "Silhouette coefficient across inter-cluster distances",
          "is_correct": false
        },
        {
          "id": "ai-ml-12-d",
          "option_text": "Kullback-Leibler divergence between sample distributions",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-13",
      "question_text": "Which clustering algorithm is capable of finding arbitrary shaped clusters and detecting outliers/noise points based on spatial density?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-13-a",
          "option_text": "DBSCAN",
          "is_correct": true
        },
        {
          "id": "ai-ml-13-b",
          "option_text": "K-Means",
          "is_correct": false
        },
        {
          "id": "ai-ml-13-c",
          "option_text": "Gaussian Mixture Models with spherical covariance",
          "is_correct": false
        },
        {
          "id": "ai-ml-13-d",
          "option_text": "Agglomerative Ward Hierarchical Clustering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-14",
      "question_text": "What is the primary mathematical principle behind Principal Component Analysis (PCA)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-14-a",
          "option_text": "Eigenvalue decomposition of the covariance matrix to project data along axes of maximum variance",
          "is_correct": true
        },
        {
          "id": "ai-ml-14-b",
          "option_text": "Minimizing cross-entropy loss using backpropagation through time",
          "is_correct": false
        },
        {
          "id": "ai-ml-14-c",
          "option_text": "Maximizing class separation margin using Lagrange multipliers",
          "is_correct": false
        },
        {
          "id": "ai-ml-14-d",
          "option_text": "Clustering nearest neighbors using Euclidean distance metrics",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-15",
      "question_text": "Which fundamental calculus rule is used by the backpropagation algorithm to compute loss gradients with respect to neural network weights?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-15-a",
          "option_text": "The Chain Rule",
          "is_correct": true
        },
        {
          "id": "ai-ml-15-b",
          "option_text": "L'Hopital's Rule",
          "is_correct": false
        },
        {
          "id": "ai-ml-15-c",
          "option_text": "Taylor Series Expansion",
          "is_correct": false
        },
        {
          "id": "ai-ml-15-d",
          "option_text": "Integration by Parts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-16",
      "question_text": "Why does the Vanishing Gradient Problem predominantly occur in deep networks utilizing Sigmoid or Tanh activation functions?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-16-a",
          "option_text": "Their derivatives saturate and are bounded between 0 and 0.25, causing gradient products to diminish exponentially",
          "is_correct": true
        },
        {
          "id": "ai-ml-16-b",
          "option_text": "They produce discontinuous output jumps that disrupt numerical differentiation",
          "is_correct": false
        },
        {
          "id": "ai-ml-16-c",
          "option_text": "They require excessive matrix inversion steps on backward passes",
          "is_correct": false
        },
        {
          "id": "ai-ml-16-d",
          "option_text": "They prevent weights from taking negative values",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-17",
      "question_text": "In Convolutional Neural Networks (CNNs), what is the primary role of a Max Pooling layer?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-17-a",
          "option_text": "Downsampling feature map dimensions while preserving dominant spatial features and translation invariance",
          "is_correct": true
        },
        {
          "id": "ai-ml-17-b",
          "option_text": "Multiplying feature maps by learnable convolution kernels",
          "is_correct": false
        },
        {
          "id": "ai-ml-17-c",
          "option_text": "Normalizing activations to zero mean and unit variance",
          "is_correct": false
        },
        {
          "id": "ai-ml-17-d",
          "option_text": "Flattening multi-channel tensors into single dense vectors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-18",
      "question_text": "What architectural innovation enables LSTMs and GRUs to model long-term sequential dependencies better than vanilla RNNs?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-18-a",
          "option_text": "Gating mechanisms (e.g. forget, input, and output gates) controlling information flow",
          "is_correct": true
        },
        {
          "id": "ai-ml-18-b",
          "option_text": "Replacing recurrent feedback loops with multi-head self-attention",
          "is_correct": false
        },
        {
          "id": "ai-ml-18-c",
          "option_text": "Using 2D spatial convolution filters over temporal tokens",
          "is_correct": false
        },
        {
          "id": "ai-ml-18-d",
          "option_text": "Enforcing orthogonal weight matrices on hidden states",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-19",
      "question_text": "In the Transformer architecture, what is the mathematical formula for Scaled Dot-Product Attention?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-19-a",
          "option_text": "softmax((Q * K^T) / sqrt(d_k)) * V",
          "is_correct": true
        },
        {
          "id": "ai-ml-19-b",
          "option_text": "sigmoid(Q * K) + V",
          "is_correct": false
        },
        {
          "id": "ai-ml-19-c",
          "option_text": "tanh((Q + K) / d_k) * V",
          "is_correct": false
        },
        {
          "id": "ai-ml-19-d",
          "option_text": "softmax(Q * V^T) / sqrt(d_k) * K",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-20",
      "question_text": "Which loss function is optimal when training a multi-class neural network classifier with mutually exclusive classes?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-20-a",
          "option_text": "Categorical Cross-Entropy",
          "is_correct": true
        },
        {
          "id": "ai-ml-20-b",
          "option_text": "Binary Cross-Entropy",
          "is_correct": false
        },
        {
          "id": "ai-ml-20-c",
          "option_text": "Mean Squared Error (MSE)",
          "is_correct": false
        },
        {
          "id": "ai-ml-20-d",
          "option_text": "Hinge Loss",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-21",
      "question_text": "What technique synthetically generates minority class examples along the line segments joining k-nearest neighbors to address class imbalance?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-21-a",
          "option_text": "SMOTE (Synthetic Minority Over-sampling Technique)",
          "is_correct": true
        },
        {
          "id": "ai-ml-21-b",
          "option_text": "Random Under-Sampling",
          "is_correct": false
        },
        {
          "id": "ai-ml-21-c",
          "option_text": "Stratified K-Fold Splitting",
          "is_correct": false
        },
        {
          "id": "ai-ml-21-d",
          "option_text": "Min-Max Normalization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-22",
      "question_text": "How does Standard Scaling (Z-Score Standardization) transform a numerical feature?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-22-a",
          "option_text": "Scales feature to have a mean of 0 and standard deviation of 1",
          "is_correct": true
        },
        {
          "id": "ai-ml-22-b",
          "option_text": "Bounds all values strictly between [0, 1]",
          "is_correct": false
        },
        {
          "id": "ai-ml-22-c",
          "option_text": "Transforms feature values into discrete quantiles",
          "is_correct": false
        },
        {
          "id": "ai-ml-22-d",
          "option_text": "Converts numerical continuous values into one-hot binary vectors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-23",
      "question_text": "Why is One-Hot Encoding preferred over Label Encoding for nominal categorical variables (e.g. Country: India, USA, Germany)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-23-a",
          "option_text": "It prevents machine learning algorithms from inferring false ordinal/numerical hierarchy (e.g. 2 > 1)",
          "is_correct": true
        },
        {
          "id": "ai-ml-23-b",
          "option_text": "It reduces the dimensionality of the feature matrix",
          "is_correct": false
        },
        {
          "id": "ai-ml-23-c",
          "option_text": "It guarantees zero missing values in downstream models",
          "is_correct": false
        },
        {
          "id": "ai-ml-23-d",
          "option_text": "It forces all categorical probabilities to sum to 1.0",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-24",
      "question_text": "What does the Area Under the ROC Curve (ROC-AUC) measure across varying classification thresholds?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-24-a",
          "option_text": "The model's capability to discriminate between positive and negative classes (TPR vs FPR)",
          "is_correct": true
        },
        {
          "id": "ai-ml-24-b",
          "option_text": "The exact accuracy of the model on the test split",
          "is_correct": false
        },
        {
          "id": "ai-ml-24-c",
          "option_text": "The average training loss across all epochs",
          "is_correct": false
        },
        {
          "id": "ai-ml-24-d",
          "option_text": "The harmonic balance between precision and calibration",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-25",
      "question_text": "What does the \"Early Stopping\" regularization technique monitor to prevent neural network overfitting?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-25-a",
          "option_text": "Validation loss, halting training when validation performance ceases to improve",
          "is_correct": true
        },
        {
          "id": "ai-ml-25-b",
          "option_text": "GPU temperature and memory bandwidth limits",
          "is_correct": false
        },
        {
          "id": "ai-ml-25-c",
          "option_text": "Gradient norms, stopping when learning rates fall below threshold",
          "is_correct": false
        },
        {
          "id": "ai-ml-25-d",
          "option_text": "Training accuracy, terminating as soon as training error hits zero",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-26",
      "question_text": "What is the role of Batch Normalization in training deep neural networks?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-26-a",
          "option_text": "Stabilizing and accelerating training by normalizing layer inputs per mini-batch",
          "is_correct": true
        },
        {
          "id": "ai-ml-26-b",
          "option_text": "Converting floating point weights to 8-bit integers for mobile deployment",
          "is_correct": false
        },
        {
          "id": "ai-ml-26-c",
          "option_text": "Shuffling training data batches before each epoch",
          "is_correct": false
        },
        {
          "id": "ai-ml-26-d",
          "option_text": "Enforcing strict dropout on hidden layer activations",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-27",
      "question_text": "In Natural Language Processing, how do Word2Vec and GloVe represent words?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-27-a",
          "option_text": "As dense, low-dimensional continuous numerical vectors capturing semantic relationships",
          "is_correct": true
        },
        {
          "id": "ai-ml-27-b",
          "option_text": "As sparse high-dimensional bag-of-words boolean matrices",
          "is_correct": false
        },
        {
          "id": "ai-ml-27-c",
          "option_text": "As phonetic transcription strings based on IPA rules",
          "is_correct": false
        },
        {
          "id": "ai-ml-27-d",
          "option_text": "As encrypted hash tokens to ensure text privacy",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-28",
      "question_text": "In Reinforcement Learning, what equation expresses the value of a state as the immediate reward plus discounted future returns?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-28-a",
          "option_text": "Bellman Equation",
          "is_correct": true
        },
        {
          "id": "ai-ml-28-b",
          "option_text": "Euler-Lagrange Equation",
          "is_correct": false
        },
        {
          "id": "ai-ml-28-c",
          "option_text": "Navier-Stokes Equation",
          "is_correct": false
        },
        {
          "id": "ai-ml-28-d",
          "option_text": "Markov Transition Formula",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-29",
      "question_text": "What is the \"Curse of Dimensionality\" in machine learning?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-29-a",
          "option_text": "As feature dimensions increase, data becomes exponentially sparse and distances lose discriminative power",
          "is_correct": true
        },
        {
          "id": "ai-ml-29-b",
          "option_text": "Models become incapable of running on single CPU architectures",
          "is_correct": false
        },
        {
          "id": "ai-ml-29-c",
          "option_text": "Data storage requirements surpass standard database limits",
          "is_correct": false
        },
        {
          "id": "ai-ml-29-d",
          "option_text": "Feature correlations will always become perfectly collinear",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ai-ml-30",
      "question_text": "Which technique randomly drops neurons and their connections during neural network training to prevent feature co-adaptation?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ai-ml-30-a",
          "option_text": "Dropout",
          "is_correct": true
        },
        {
          "id": "ai-ml-30-b",
          "option_text": "Weight Decay",
          "is_correct": false
        },
        {
          "id": "ai-ml-30-c",
          "option_text": "Gradient Clipping",
          "is_correct": false
        },
        {
          "id": "ai-ml-30-d",
          "option_text": "Data Augmentation",
          "is_correct": false
        }
      ]
    }
  ],
  "full-stack-web-development": [
    {
      "id": "full-stack-web-development-1",
      "question_text": "What is the Virtual DOM in React, and why is it used?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-1-a",
          "option_text": "An in-memory lightweight representation of the real DOM used for fast diffing and batch updates",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-1-b",
          "option_text": "A browser API providing direct GPU acceleration for canvas elements",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-1-c",
          "option_text": "A server-side cache for caching raw HTML responses",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-1-d",
          "option_text": "A database shadow copy representing user sessions",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-2",
      "question_text": "In React, what is the behavior of useEffect when an empty dependency array ([]) is passed as the second argument?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-2-a",
          "option_text": "The effect runs once after the initial component mount",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-2-b",
          "option_text": "The effect runs after every single render and re-render",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-2-c",
          "option_text": "The effect never runs at all",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-2-d",
          "option_text": "The effect runs only when component props change",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-3",
      "question_text": "What is the key difference between useMemo and useCallback in React?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-3-a",
          "option_text": "useMemo memoizes a computed value; useCallback memoizes a function reference",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-3-b",
          "option_text": "useMemo is for asynchronous API calls; useCallback is for synchronous state updates",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-3-c",
          "option_text": "useMemo persists data to localStorage; useCallback persists data to cookies",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-3-d",
          "option_text": "useMemo binds event listeners; useCallback unbinds them on unmount",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-4",
      "question_text": "In the CSS Box Model, what is the correct order from inside to outside?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-4-a",
          "option_text": "Content -> Padding -> Border -> Margin",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-4-b",
          "option_text": "Content -> Border -> Padding -> Margin",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-4-c",
          "option_text": "Margin -> Border -> Padding -> Content",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-4-d",
          "option_text": "Content -> Margin -> Padding -> Border",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-5",
      "question_text": "In CSS Flexbox, which property aligns items along the cross axis?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-5-a",
          "option_text": "align-items",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-5-b",
          "option_text": "justify-content",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-5-c",
          "option_text": "flex-direction",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-5-d",
          "option_text": "align-content",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-6",
      "question_text": "How does the JavaScript Event Loop handle Promises (microtasks) compared to setTimeout (macrotasks)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-6-a",
          "option_text": "Microtasks queue is processed immediately after the current script, before any macrotask",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-6-b",
          "option_text": "Macrotasks always execute before microtasks",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-6-c",
          "option_text": "Both microtasks and macrotasks execute concurrently on separate OS threads",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-6-d",
          "option_text": "Promises are delegated to the browser worker pool and execute last",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-7",
      "question_text": "What is a JavaScript closure?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-7-a",
          "option_text": "A function bundled with references to its surrounding lexical environment",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-7-b",
          "option_text": "A method to forcibly terminate infinite while loops",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-7-c",
          "option_text": "A syntax for defining private class fields using the # prefix",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-7-d",
          "option_text": "An asynchronous callback executed when a network request completes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-8",
      "question_text": "What is the difference between \"let\" and \"var\" in JavaScript?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-8-a",
          "option_text": "\"let\" is block-scoped and temporal dead zone protected; \"var\" is function-scoped and hoisted",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-8-b",
          "option_text": "\"let\" cannot be reassigned; \"var\" can be reassigned",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-8-c",
          "option_text": "\"let\" is hoisted to window object; \"var\" is not hoisted",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-8-d",
          "option_text": "\"let\" only accepts string values; \"var\" accepts any data type",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-9",
      "question_text": "Which HTTP method should be used according to RESTful standards for idempotent full replacement of an existing resource?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-9-a",
          "option_text": "PUT",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-9-b",
          "option_text": "POST",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-9-c",
          "option_text": "PATCH",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-9-d",
          "option_text": "GET",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-10",
      "question_text": "What HTTP status code represents \"Unauthorized\" (meaning client authentication credentials are required or invalid)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-10-a",
          "option_text": "401",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-10-b",
          "option_text": "403",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-10-c",
          "option_text": "404",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-10-d",
          "option_text": "400",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-11",
      "question_text": "What security mechanism does CORS (Cross-Origin Resource Sharing) enforce?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-11-a",
          "option_text": "It restricts browsers from making cross-origin HTTP requests unless permitted by server headers",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-11-b",
          "option_text": "It encrypts database network traffic between backend servers and clients",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-11-c",
          "option_text": "It prevents users from taking screenshots inside web browsers",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-11-d",
          "option_text": "It enforces automatic password rotation on login forms",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-12",
      "question_text": "What are the three components of a JSON Web Token (JWT) separated by periods?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-12-a",
          "option_text": "Header, Payload, Signature",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-12-b",
          "option_text": "Header, Body, Encryption Key",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-12-c",
          "option_text": "Origin, Claims, Hash",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-12-d",
          "option_text": "TokenId, ClientSecret, Checksum",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-13",
      "question_text": "Why are authentication session cookies typically configured with the \"HttpOnly\" flag?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-13-a",
          "option_text": "To prevent client-side JavaScript from accessing the cookie, mitigating XSS token theft",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-13-b",
          "option_text": "To ensure the cookie is only transmitted over HTTPS encrypted connections",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-13-c",
          "option_text": "To restrict cookie transmission to top-level domain navigation",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-13-d",
          "option_text": "To compress cookie payload size for faster transmission",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-14",
      "question_text": "How does Node.js achieve high concurrency despite being single-threaded for JavaScript execution?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-14-a",
          "option_text": "Via an event-driven non-blocking I/O model supported by the libuv C++ thread pool",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-14-b",
          "option_text": "By spinning up a new OS process for every incoming HTTP request",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-14-c",
          "option_text": "By executing JavaScript bytecode directly on GPU shaders",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-14-d",
          "option_text": "By disabling asynchronous event handling entirely",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-15",
      "question_text": "In Express.js, what is the role of the \"next()\" parameter in middleware functions?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-15-a",
          "option_text": "Passes control to the next middleware function in the request-response cycle",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-15-b",
          "option_text": "Sends the final JSON response to the client",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-15-c",
          "option_text": "Restarts the Express HTTP server process",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-15-d",
          "option_text": "Rolls back the active database transaction",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-16",
      "question_text": "What is the primary benefit of adding a B-Tree index to a database column?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-16-a",
          "option_text": "Dramatically accelerates SELECT query filtering and sorting at the cost of slower writes",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-16-b",
          "option_text": "Ensures the column can only store non-null unique values",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-16-c",
          "option_text": "Compresses database table size on physical hard drives",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-16-d",
          "option_text": "Encrypts column data with AES-256 at rest",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-17",
      "question_text": "What is the difference between SQL INNER JOIN and LEFT JOIN?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-17-a",
          "option_text": "INNER JOIN returns rows matching both tables; LEFT JOIN returns all left rows plus matched right rows",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-17-b",
          "option_text": "INNER JOIN returns all rows from both tables; LEFT JOIN returns only rows from left table",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-17-c",
          "option_text": "INNER JOIN is only for primary keys; LEFT JOIN is for foreign keys",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-17-d",
          "option_text": "LEFT JOIN eliminates duplicate columns while INNER JOIN duplicates them",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-18",
      "question_text": "What is Server-Side Rendering (SSR) in frameworks like Next.js, and what is its primary benefit?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-18-a",
          "option_text": "Pre-rendering HTML on the server for each request, delivering faster FCP and better SEO",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-18-b",
          "option_text": "Executing all database queries on client browsers via WebAssembly",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-18-c",
          "option_text": "Compiling React components into native desktop C++ binaries",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-18-d",
          "option_text": "Generating static HTML files only once at build time without dynamic server computation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-19",
      "question_text": "What technology provides full-duplex, persistent bidirectional communication between client and server over a single TCP connection?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-19-a",
          "option_text": "WebSockets",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-19-b",
          "option_text": "HTTP Short Polling",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-19-c",
          "option_text": "Server-Sent Events (SSE)",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-19-d",
          "option_text": "REST Webhooks",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-20",
      "question_text": "What is the purpose of the CSS property \"box-sizing: border-box\"?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-20-a",
          "option_text": "Includes padding and border within the specified width and height of an element",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-20-b",
          "option_text": "Excludes margins from calculations of parent container width",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-20-c",
          "option_text": "Forces all child elements to display as inline blocks",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-20-d",
          "option_text": "Adds a drop shadow around the element border automatically",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-21",
      "question_text": "What does the \"useCallback\" hook return in React?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-21-a",
          "option_text": "A memoized version of the callback function that only changes if dependencies change",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-21-b",
          "option_text": "The returned value of executing the callback function",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-21-c",
          "option_text": "A Promise resolving when the callback finishes execution",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-21-d",
          "option_text": "A ref pointer attached to the DOM node",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-22",
      "question_text": "What is the purpose of React Portal (ReactDOM.createPortal)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-22-a",
          "option_text": "Rendering children into a DOM node that exists outside the DOM hierarchy of parent component",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-22-b",
          "option_text": "Establishing WebRTC peer-to-peer data channels between browsers",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-22-c",
          "option_text": "Transferring state between two isolated React root applications",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-22-d",
          "option_text": "Lazy-loading heavy components over dynamic network imports",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-23",
      "question_text": "In Node.js, what does the \"EventEmitter\" pattern allow objects to do?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-23-a",
          "option_text": "Emit named events that cause previously registered listener functions to be called",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-23-b",
          "option_text": "Write unbuffered binary data directly to disk blocks",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-23-c",
          "option_text": "Share RAM memory heap across multiple worker threads",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-23-d",
          "option_text": "Proxy incoming TCP sockets to remote DNS hostnames",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-24",
      "question_text": "What is SQL Injection (SQLi) and how is it reliably prevented in full-stack applications?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-24-a",
          "option_text": "Malicious SQL injected via user input; prevented by using parameterized queries / prepared statements",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-24-b",
          "option_text": "Injecting JavaScript into DOM; prevented by setting HttpOnly cookies",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-24-c",
          "option_text": "Overwhelming database server with connections; prevented by connection pooling",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-24-d",
          "option_text": "Stealing session tokens from memory; prevented by SSL encryption",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-25",
      "question_text": "What does the JavaScript \"=== \" (strict equality) operator check compared to \"==\" (loose equality)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-25-a",
          "option_text": "Checks both value and data type without performing type coercion",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-25-b",
          "option_text": "Performs automatic type conversion before comparing values",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-25-c",
          "option_text": "Checks whether two objects have identical memory references only",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-25-d",
          "option_text": "Checks whether strings match case-insensitively",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-26",
      "question_text": "What is the role of a Service Worker in Progressive Web Applications (PWA)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-26-a",
          "option_text": "Runs in background intercepting network requests to enable offline caching and push notifications",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-26-b",
          "option_text": "Manages database migrations on backend servers",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-26-c",
          "option_text": "Handles CSS animations and 3D WebGL rendering threads",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-26-d",
          "option_text": "Compiles TypeScript into minified JavaScript bundles",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-27",
      "question_text": "In relational databases, what does the ACID acronym stand for?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-27-a",
          "option_text": "Atomicity, Consistency, Isolation, Durability",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-27-b",
          "option_text": "Asynchronous, Concurrent, Indexed, Distributed",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-27-c",
          "option_text": "Aggregation, Cache, Integrity, Delivery",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-27-d",
          "option_text": "Authentication, Confidentiality, Identity, Decryption",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-28",
      "question_text": "What is the purpose of the HTML5 semantic tag <main>?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-28-a",
          "option_text": "Specifies the unique dominant content of the document body",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-28-b",
          "option_text": "Contains site-wide navigation links and menu items",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-28-c",
          "option_text": "Houses introductory banner content and logo images",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-28-d",
          "option_text": "Defines tangential sidebar content related to the page",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-29",
      "question_text": "How does CSS Grid differ fundamentally from CSS Flexbox?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-29-a",
          "option_text": "Grid is two-dimensional (rows and columns); Flexbox is one-dimensional (row or column)",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-29-b",
          "option_text": "Grid only works with fixed pixel sizes; Flexbox works with percentages",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-29-c",
          "option_text": "Grid is deprecated in modern browsers; Flexbox is the replacement",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-29-d",
          "option_text": "Grid is only for typography layouts; Flexbox is for layout containers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "full-stack-web-development-30",
      "question_text": "What is Code Splitting in modern frontend bundlers (e.g. Vite, Webpack)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "full-stack-web-development-30-a",
          "option_text": "Splitting bundle into smaller chunks loaded on-demand to reduce initial page load time",
          "is_correct": true
        },
        {
          "id": "full-stack-web-development-30-b",
          "option_text": "Formatting code according to Prettier formatting rules",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-30-c",
          "option_text": "Separating HTML, CSS, and JavaScript into three isolated files",
          "is_correct": false
        },
        {
          "id": "full-stack-web-development-30-d",
          "option_text": "Compiling code into separate binaries for different OS platforms",
          "is_correct": false
        }
      ]
    }
  ],
  "python-programming": [
    {
      "id": "python-programming-1",
      "question_text": "What is the output of print(type(5 / 2)) in Python 3?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-1-a",
          "option_text": "<class 'float'>",
          "is_correct": true
        },
        {
          "id": "python-programming-1-b",
          "option_text": "<class 'int'>",
          "is_correct": false
        },
        {
          "id": "python-programming-1-c",
          "option_text": "<class 'double'>",
          "is_correct": false
        },
        {
          "id": "python-programming-1-d",
          "option_text": "<class 'number'>",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-2",
      "question_text": "Which of the following data types in Python is immutable?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-2-a",
          "option_text": "Tuple",
          "is_correct": true
        },
        {
          "id": "python-programming-2-b",
          "option_text": "List",
          "is_correct": false
        },
        {
          "id": "python-programming-2-c",
          "option_text": "Dictionary",
          "is_correct": false
        },
        {
          "id": "python-programming-2-d",
          "option_text": "Set",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-3",
      "question_text": "What keyword is used to define an anonymous function in Python?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-3-a",
          "option_text": "lambda",
          "is_correct": true
        },
        {
          "id": "python-programming-3-b",
          "option_text": "def",
          "is_correct": false
        },
        {
          "id": "python-programming-3-c",
          "option_text": "func",
          "is_correct": false
        },
        {
          "id": "python-programming-3-d",
          "option_text": "inline",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-4",
      "question_text": "What does the *args parameter represent in a Python function definition?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-4-a",
          "option_text": "Variable length non-keyword positional arguments as a tuple",
          "is_correct": true
        },
        {
          "id": "python-programming-4-b",
          "option_text": "Keyword arguments dictionary",
          "is_correct": false
        },
        {
          "id": "python-programming-4-c",
          "option_text": "Default arguments list",
          "is_correct": false
        },
        {
          "id": "python-programming-4-d",
          "option_text": "Pointer to a tuple",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-5",
      "question_text": "What is the average time complexity of looking up a key in a standard Python dictionary?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-5-a",
          "option_text": "O(1)",
          "is_correct": true
        },
        {
          "id": "python-programming-5-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "python-programming-5-c",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "python-programming-5-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-6",
      "question_text": "What is the Global Interpreter Lock (GIL) in CPython?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-6-a",
          "option_text": "A mutex that prevents multiple native threads from executing Python bytecodes at once",
          "is_correct": true
        },
        {
          "id": "python-programming-6-b",
          "option_text": "A security lock that encrypts Python scripts at runtime",
          "is_correct": false
        },
        {
          "id": "python-programming-6-c",
          "option_text": "A memory manager that locks unused RAM blocks",
          "is_correct": false
        },
        {
          "id": "python-programming-6-d",
          "option_text": "A compiler pass that prevents global variables from mutation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-7",
      "question_text": "What is the difference between the \"is\" operator and the \"==\" operator in Python?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-7-a",
          "option_text": "\"is\" checks object identity (same memory address); \"==\" checks value equality",
          "is_correct": true
        },
        {
          "id": "python-programming-7-b",
          "option_text": "\"is\" checks value equality; \"==\" checks identity",
          "is_correct": false
        },
        {
          "id": "python-programming-7-c",
          "option_text": "\"is\" converts types; \"==\" does not convert types",
          "is_correct": false
        },
        {
          "id": "python-programming-7-d",
          "option_text": "\"is\" is used only for strings; \"==\" is used for numbers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-8",
      "question_text": "Which built-in Python method is called to initialize a newly created class instance?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-8-a",
          "option_text": "__init__",
          "is_correct": true
        },
        {
          "id": "python-programming-8-b",
          "option_text": "__new__",
          "is_correct": false
        },
        {
          "id": "python-programming-8-c",
          "option_text": "__construct__",
          "is_correct": false
        },
        {
          "id": "python-programming-8-d",
          "option_text": "__start__",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-9",
      "question_text": "What does the \"yield\" keyword do inside a Python function?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-9-a",
          "option_text": "Turns the function into a generator that yields values lazily on-demand",
          "is_correct": true
        },
        {
          "id": "python-programming-9-b",
          "option_text": "Terminates function execution and returns an error code",
          "is_correct": false
        },
        {
          "id": "python-programming-9-c",
          "option_text": "Forces the CPU to pause execution for 100 milliseconds",
          "is_correct": false
        },
        {
          "id": "python-programming-9-d",
          "option_text": "Converts local variables into global variables",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-10",
      "question_text": "What is the primary benefit of using a Python Context Manager with the \"with\" statement?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-10-a",
          "option_text": "Guarantees resource cleanup (e.g. closing files or connections) even if exceptions occur",
          "is_correct": true
        },
        {
          "id": "python-programming-10-b",
          "option_text": "Accelerates function execution by caching return values",
          "is_correct": false
        },
        {
          "id": "python-programming-10-c",
          "option_text": "Allows multiple threads to access shared memory simultaneously",
          "is_correct": false
        },
        {
          "id": "python-programming-10-d",
          "option_text": "Bypasses the Python Global Interpreter Lock",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-11",
      "question_text": "What is the result of list(range(1, 10, 2)) in Python?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-11-a",
          "option_text": "[1, 3, 5, 7, 9]",
          "is_correct": true
        },
        {
          "id": "python-programming-11-b",
          "option_text": "[1, 2, 4, 6, 8]",
          "is_correct": false
        },
        {
          "id": "python-programming-11-c",
          "option_text": "[2, 4, 6, 8, 10]",
          "is_correct": false
        },
        {
          "id": "python-programming-11-d",
          "option_text": "[1, 3, 5, 7, 9, 10]",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-12",
      "question_text": "What is the difference between shallow copy (copy.copy) and deep copy (copy.deepcopy)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-12-a",
          "option_text": "Shallow copy copies the outer container referencing nested objects; deep copy recursively copies all nested objects",
          "is_correct": true
        },
        {
          "id": "python-programming-12-b",
          "option_text": "Shallow copy copies strings; deep copy copies numbers",
          "is_correct": false
        },
        {
          "id": "python-programming-12-c",
          "option_text": "Shallow copy works on tuples; deep copy works on lists",
          "is_correct": false
        },
        {
          "id": "python-programming-12-d",
          "option_text": "Shallow copy writes to disk; deep copy writes to RAM",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-13",
      "question_text": "Which Python collection type stores unique, unordered, and hashable elements?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-13-a",
          "option_text": "set",
          "is_correct": true
        },
        {
          "id": "python-programming-13-b",
          "option_text": "list",
          "is_correct": false
        },
        {
          "id": "python-programming-13-c",
          "option_text": "dict",
          "is_correct": false
        },
        {
          "id": "python-programming-13-d",
          "option_text": "tuple",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-14",
      "question_text": "In Python, what algorithm is used by the Method Resolution Order (MRO) for multiple inheritance?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-14-a",
          "option_text": "C3 Linearization",
          "is_correct": true
        },
        {
          "id": "python-programming-14-b",
          "option_text": "Depth-First Search (DFS)",
          "is_correct": false
        },
        {
          "id": "python-programming-14-c",
          "option_text": "Breadth-First Search (BFS)",
          "is_correct": false
        },
        {
          "id": "python-programming-14-d",
          "option_text": "Dijkstra Algorithm",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-15",
      "question_text": "What is the purpose of functools.wraps when writing Python decorators?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-15-a",
          "option_text": "Preserves the original function name, docstring, and metadata on the decorated wrapper",
          "is_correct": true
        },
        {
          "id": "python-programming-15-b",
          "option_text": "Converts synchronous functions into asynchronous coroutines",
          "is_correct": false
        },
        {
          "id": "python-programming-15-c",
          "option_text": "Compiles the function into native C machine code",
          "is_correct": false
        },
        {
          "id": "python-programming-15-d",
          "option_text": "Encrypts the source code of the wrapped function",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-16",
      "question_text": "How does Python handle memory management and cleanup of unreferenced objects?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-16-a",
          "option_text": "Automatic Reference Counting combined with a cyclic generational Garbage Collector",
          "is_correct": true
        },
        {
          "id": "python-programming-16-b",
          "option_text": "Manual free() calls required by developers",
          "is_correct": false
        },
        {
          "id": "python-programming-16-c",
          "option_text": "Linear sweep garbage collection at application exit only",
          "is_correct": false
        },
        {
          "id": "python-programming-16-d",
          "option_text": "Allocating memory solely on the CPU L1 cache",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-17",
      "question_text": "What does a list comprehension [x for x in range(10) if x % 2 == 0] produce?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-17-a",
          "option_text": "[0, 2, 4, 6, 8]",
          "is_correct": true
        },
        {
          "id": "python-programming-17-b",
          "option_text": "[2, 4, 6, 8, 10]",
          "is_correct": false
        },
        {
          "id": "python-programming-17-c",
          "option_text": "[1, 3, 5, 7, 9]",
          "is_correct": false
        },
        {
          "id": "python-programming-17-d",
          "option_text": "[0, 1, 2, 3, 4]",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-18",
      "question_text": "What does the built-in enumerate() function return when iterating over an iterable?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-18-a",
          "option_text": "Pairs of (index, item) for each element in the iterable",
          "is_correct": true
        },
        {
          "id": "python-programming-18-b",
          "option_text": "A sorted duplicate list of the iterable",
          "is_correct": false
        },
        {
          "id": "python-programming-18-c",
          "option_text": "A reversed list of elements",
          "is_correct": false
        },
        {
          "id": "python-programming-18-d",
          "option_text": "The total count of items in the iterable",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-19",
      "question_text": "In Python exception handling, when does the \"else\" block execute?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-19-a",
          "option_text": "Only if no exception was raised inside the try block",
          "is_correct": true
        },
        {
          "id": "python-programming-19-b",
          "option_text": "Always, right before the finally block",
          "is_correct": false
        },
        {
          "id": "python-programming-19-c",
          "option_text": "Only if an exception was caught by except",
          "is_correct": false
        },
        {
          "id": "python-programming-19-d",
          "option_text": "When the script encounters an unhandled warning",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-20",
      "question_text": "What does the __str__() magic method return compared to __repr__()?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-20-a",
          "option_text": "__str__ returns a user-friendly readable string; __repr__ returns an unambiguous official string for debugging",
          "is_correct": true
        },
        {
          "id": "python-programming-20-b",
          "option_text": "__str__ returns integer hash; __repr__ returns string",
          "is_correct": false
        },
        {
          "id": "python-programming-20-c",
          "option_text": "__str__ prints to console; __repr__ writes to file",
          "is_correct": false
        },
        {
          "id": "python-programming-20-d",
          "option_text": "__str__ is for numbers; __repr__ is for text",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-21",
      "question_text": "What decorator defines a method that receives the class (cls) as its first implicit argument rather than an instance (self)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-21-a",
          "option_text": "@classmethod",
          "is_correct": true
        },
        {
          "id": "python-programming-21-b",
          "option_text": "@staticmethod",
          "is_correct": false
        },
        {
          "id": "python-programming-21-c",
          "option_text": "@property",
          "is_correct": false
        },
        {
          "id": "python-programming-21-d",
          "option_text": "@abstractmethod",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-22",
      "question_text": "What does collections.defaultdict do when a non-existent key is queried?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-22-a",
          "option_text": "Automatically initializes the key with a default value provided by a factory function without raising KeyError",
          "is_correct": true
        },
        {
          "id": "python-programming-22-b",
          "option_text": "Raises a KeyError exception immediately",
          "is_correct": false
        },
        {
          "id": "python-programming-22-c",
          "option_text": "Deletes the dictionary from memory",
          "is_correct": false
        },
        {
          "id": "python-programming-22-d",
          "option_text": "Returns None without modifying the dictionary",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-23",
      "question_text": "In Python, what is the output of bool([])?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-23-a",
          "option_text": "False",
          "is_correct": true
        },
        {
          "id": "python-programming-23-b",
          "option_text": "True",
          "is_correct": false
        },
        {
          "id": "python-programming-23-c",
          "option_text": "None",
          "is_correct": false
        },
        {
          "id": "python-programming-23-d",
          "option_text": "SyntaxError",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-24",
      "question_text": "What does the zip() function do when passed iterables of unequal length?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-24-a",
          "option_text": "Stops iterating when the shortest input iterable is exhausted",
          "is_correct": true
        },
        {
          "id": "python-programming-24-b",
          "option_text": "Fills missing values with None automatically",
          "is_correct": false
        },
        {
          "id": "python-programming-24-c",
          "option_text": "Raises a ValueError exception by default",
          "is_correct": false
        },
        {
          "id": "python-programming-24-d",
          "option_text": "Loops through the shorter iterable continuously",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-25",
      "question_text": "What module provides asynchronous event loop and coroutines in standard Python?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-25-a",
          "option_text": "asyncio",
          "is_correct": true
        },
        {
          "id": "python-programming-25-b",
          "option_text": "threading",
          "is_correct": false
        },
        {
          "id": "python-programming-25-c",
          "option_text": "multiprocessing",
          "is_correct": false
        },
        {
          "id": "python-programming-25-d",
          "option_text": "concurrent.futures",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-26",
      "question_text": "What does the \"pass\" statement do in Python?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-26-a",
          "option_text": "A null statement that executes and does nothing, used as a syntactic placeholder",
          "is_correct": true
        },
        {
          "id": "python-programming-26-b",
          "option_text": "Exits the enclosing loop immediately",
          "is_correct": false
        },
        {
          "id": "python-programming-26-c",
          "option_text": "Skips to the next iteration of the loop",
          "is_correct": false
        },
        {
          "id": "python-programming-26-d",
          "option_text": "Raises a StopIteration exception",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-27",
      "question_text": "What is the syntax for creating an f-string in Python 3.6+?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-27-a",
          "option_text": "f\"Value is {var}\"",
          "is_correct": true
        },
        {
          "id": "python-programming-27-b",
          "option_text": "format(\"Value is %s\", var)",
          "is_correct": false
        },
        {
          "id": "python-programming-27-c",
          "option_text": "\"Value is {0}\".format(var)",
          "is_correct": false
        },
        {
          "id": "python-programming-27-d",
          "option_text": "s\"Value is $(var)\"",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-28",
      "question_text": "What does the __all__ list inside a Python package __init__.py file define?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-28-a",
          "option_text": "The list of public module names exported when \"from package import *\" is used",
          "is_correct": true
        },
        {
          "id": "python-programming-28-b",
          "option_text": "All external pip dependencies required by the package",
          "is_correct": false
        },
        {
          "id": "python-programming-28-c",
          "option_text": "The author and license information for PyPI",
          "is_correct": false
        },
        {
          "id": "python-programming-28-d",
          "option_text": "The list of test cases to execute on pytest",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-29",
      "question_text": "How does Python evaluate round(2.5) and round(3.5)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-29-a",
          "option_text": "2 and 4 (Banker's Rounding / round half to even)",
          "is_correct": true
        },
        {
          "id": "python-programming-29-b",
          "option_text": "3 and 4 (Standard arithmetic rounding)",
          "is_correct": false
        },
        {
          "id": "python-programming-29-c",
          "option_text": "2 and 3 (Truncating towards zero)",
          "is_correct": false
        },
        {
          "id": "python-programming-29-d",
          "option_text": "3 and 3 (Ceiling rounding)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "python-programming-30",
      "question_text": "Which data structure from the collections module implements a double-ended queue with O(1) appends and pops from both ends?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "python-programming-30-a",
          "option_text": "deque",
          "is_correct": true
        },
        {
          "id": "python-programming-30-b",
          "option_text": "OrderedDict",
          "is_correct": false
        },
        {
          "id": "python-programming-30-c",
          "option_text": "ChainMap",
          "is_correct": false
        },
        {
          "id": "python-programming-30-d",
          "option_text": "Counter",
          "is_correct": false
        }
      ]
    }
  ],
  "java-backend-architecture": [
    {
      "id": "java-backend-architecture-1",
      "question_text": "In the Java Virtual Machine (JVM), where are object instances and arrays allocated?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-1-a",
          "option_text": "Heap Memory",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-1-b",
          "option_text": "Stack Memory",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-1-c",
          "option_text": "Method Area",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-1-d",
          "option_text": "PC Register",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-2",
      "question_text": "Starting from Java 8, what types of concrete methods can be declared inside an Interface?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-2-a",
          "option_text": "default and static methods",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-2-b",
          "option_text": "private synchronized methods only",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-2-c",
          "option_text": "final abstract methods only",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-2-d",
          "option_text": "native constructor methods",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-3",
      "question_text": "What is the key difference between String and StringBuilder in Java?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-3-a",
          "option_text": "String is immutable; StringBuilder is mutable and faster for frequent concatenations",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-3-b",
          "option_text": "String is mutable; StringBuilder is immutable",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-3-c",
          "option_text": "String is thread-safe; StringBuilder is synchronized",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-3-d",
          "option_text": "String stores bytes; StringBuilder stores integers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-4",
      "question_text": "What is the fundamental difference between HashMap and Hashtable in Java?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-4-a",
          "option_text": "HashMap is unsynchronized and allows one null key; Hashtable is synchronized and permits no null keys",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-4-b",
          "option_text": "HashMap is thread-safe; Hashtable is not thread-safe",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-4-c",
          "option_text": "HashMap is ordered; Hashtable is sorted by keys",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-4-d",
          "option_text": "HashMap stores primitives; Hashtable stores objects",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-5",
      "question_text": "What is the difference between method Overloading and method Overriding in Java?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-5-a",
          "option_text": "Overloading has same name with different parameter signatures in the same class; Overriding redefines superclass method in subclass",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-5-b",
          "option_text": "Overloading occurs at runtime; Overriding occurs at compile-time",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-5-c",
          "option_text": "Overloading requires the @Override annotation; Overriding does not",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-5-d",
          "option_text": "Overloading is for static methods only; Overriding is for private methods only",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-6",
      "question_text": "In Spring Boot, what does the @RestController annotation combine?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-6-a",
          "option_text": "@Controller and @ResponseBody",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-6-b",
          "option_text": "@Controller and @Service",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-6-c",
          "option_text": "@Component and @Repository",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-6-d",
          "option_text": "@Service and @Autowired",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-7",
      "question_text": "What is the default bean scope in the Spring Framework IoC Container?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-7-a",
          "option_text": "Singleton",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-7-b",
          "option_text": "Prototype",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-7-c",
          "option_text": "Request",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-7-d",
          "option_text": "Session",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-8",
      "question_text": "What does the @SpringBootApplication annotation encapsulate?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-8-a",
          "option_text": "@Configuration, @EnableAutoConfiguration, and @ComponentScan",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-8-b",
          "option_text": "@Service, @Repository, and @Controller",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-8-c",
          "option_text": "@Entity, @Table, and @Id",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-8-d",
          "option_text": "@Component, @Scope, and @Lazy",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-9",
      "question_text": "What is the purpose of the \"volatile\" keyword in Java multithreading?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-9-a",
          "option_text": "Guarantees that updates to a variable are immediately visible to all threads by reading from main memory",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-9-b",
          "option_text": "Locks the object monitor preventing concurrent access",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-9-c",
          "option_text": "Prevents the variable from being serialized to disk",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-9-d",
          "option_text": "Ensures the variable cannot be modified after initialization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-10",
      "question_text": "What is the difference between ArrayList and LinkedList in Java?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-10-a",
          "option_text": "ArrayList uses a dynamic resizable array (O(1) random access); LinkedList uses a doubly-linked list (O(1) insertions at ends)",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-10-b",
          "option_text": "ArrayList is synchronized; LinkedList is unsynchronized",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-10-c",
          "option_text": "ArrayList cannot store duplicates; LinkedList can store duplicates",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-10-d",
          "option_text": "ArrayList is for primitive types; LinkedList is for reference types",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-11",
      "question_text": "Which interface in Java is used to define the natural ordering of objects via the compareTo() method?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-11-a",
          "option_text": "Comparable",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-11-b",
          "option_text": "Comparator",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-11-c",
          "option_text": "Cloneable",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-11-d",
          "option_text": "Serializable",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-12",
      "question_text": "What are Checked Exceptions in Java?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-12-a",
          "option_text": "Exceptions that inherit from Exception (excluding RuntimeException) and must be handled or declared in throws clause",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-12-b",
          "option_text": "Exceptions that inherit directly from Error and cause JVM termination",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-12-c",
          "option_text": "Exceptions that only occur during unit test execution",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-12-d",
          "option_text": "Exceptions that inherit from RuntimeException and are unchecked at compile-time",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-13",
      "question_text": "What is Inversion of Control (IoC) in the Spring Framework?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-13-a",
          "option_text": "The framework manages object creation and lifecycle, injecting dependencies rather than objects instantiating them",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-13-b",
          "option_text": "Reversing the flow of TCP network packets",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-13-c",
          "option_text": "Inverting the inheritance hierarchy between classes and interfaces",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-13-d",
          "option_text": "Compiling Java bytecode directly into C++ source code",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-14",
      "question_text": "What does the @Transactional annotation in Spring manage?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-14-a",
          "option_text": "Automatic transaction demarcation (commit on success, rollback on RuntimeException)",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-14-b",
          "option_text": "Encrypting database columns during persistence",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-14-c",
          "option_text": "Rate limiting incoming HTTP requests",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-14-d",
          "option_text": "Logging SQL query latency to console",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-15",
      "question_text": "What is the purpose of Optional<T> introduced in Java 8?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-15-a",
          "option_text": "To provide a type-level representation of a value that may or may not be present, reducing NullPointerExceptions",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-15-b",
          "option_text": "To make method parameters optional in function calls",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-15-c",
          "option_text": "To enable optional multithreading execution",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-15-d",
          "option_text": "To define optional dependencies in Maven pom.xml",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-16",
      "question_text": "What is the difference between Hibernate First-Level (L1) and Second-Level (L2) Cache?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-16-a",
          "option_text": "L1 Cache is session-scoped (enabled by default); L2 Cache is SessionFactory-scoped across sessions (optional, shared)",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-16-b",
          "option_text": "L1 Cache stores data in Redis; L2 Cache stores data in RAM",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-16-c",
          "option_text": "L1 Cache is for MongoDB; L2 Cache is for PostgreSQL",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-16-d",
          "option_text": "L1 Cache is client-side; L2 Cache is server-side",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-17",
      "question_text": "How does Spring Data JPA generate SQL queries when using repository interface method names like findByEmailAndStatus(String email, String status)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-17-a",
          "option_text": "Parses method naming conventions using reflection and dynamically derives the JPQL/SQL query",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-17-b",
          "option_text": "Requires raw SQL string annotations on all repository methods",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-17-c",
          "option_text": "Compiles method names into stored procedures on database boot",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-17-d",
          "option_text": "Executes a full table scan and filters records in JVM memory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-18",
      "question_text": "What is Type Erasure in Java Generics?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-18-a",
          "option_text": "The compiler strips all generic type parameter information at compile time, replacing with bounds/Object for bytecode backward compatibility",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-18-b",
          "option_text": "A runtime exception thrown when casting incompatible types",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-18-c",
          "option_text": "Erasing unused class definitions during garbage collection",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-18-d",
          "option_text": "A garbage collection phase that clears static variable memory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-19",
      "question_text": "What is the ExecutorService in java.util.concurrent?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-19-a",
          "option_text": "A high-level framework that manages thread pools and asynchronous task execution lifecycle",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-19-b",
          "option_text": "A low-level operating system scheduler hook",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-19-c",
          "option_text": "A tool for compiling Java source code in parallel",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-19-d",
          "option_text": "A garbage collection thread monitor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-20",
      "question_text": "Which annotation in Spring Boot is used to extract a variable from the URI path (e.g. /users/{id})?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-20-a",
          "option_text": "@PathVariable",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-20-b",
          "option_text": "@RequestParam",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-20-c",
          "option_text": "@RequestBody",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-20-d",
          "option_text": "@RequestHeader",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-21",
      "question_text": "What is the contract between equals() and hashCode() in Java?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-21-a",
          "option_text": "If two objects are equal according to equals(), they must produce the same hashCode() integer",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-21-b",
          "option_text": "If two objects have the same hashCode(), they must always be equal according to equals()",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-21-c",
          "option_text": "hashCode() must return a unique integer for every distinct object in memory",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-21-d",
          "option_text": "equals() and hashCode() are completely independent with no contractual requirement",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-22",
      "question_text": "In Spring Framework, how does Dependency Injection via constructor compare to field injection with @Autowired?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-22-a",
          "option_text": "Constructor injection is preferred because it enables immutability (final fields) and simplifies unit testing without mocking framework",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-22-b",
          "option_text": "Field injection is faster at runtime than constructor injection",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-22-c",
          "option_text": "Constructor injection is deprecated in Spring Boot 3",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-22-d",
          "option_text": "Field injection is the only way to inject circular dependencies",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-23",
      "question_text": "What does the finalize() method do in Java, and why is it deprecated in modern Java versions?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-23-a",
          "option_text": "Called by garbage collector before object reclamation; deprecated due to unpredictable timing, performance issues, and deadlocks",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-23-b",
          "option_text": "Finalizes class bytecode compilation; deprecated in favor of GraalVM",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-23-c",
          "option_text": "Closes database sockets automatically; deprecated for try-with-resources",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-23-d",
          "option_text": "Prevents classes from being extended; deprecated for sealed classes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-24",
      "question_text": "Which garbage collector was introduced as the default low-pause collector in Java 9+?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-24-a",
          "option_text": "G1 (Garbage-First) GC",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-24-b",
          "option_text": "Serial GC",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-24-c",
          "option_text": "Parallel GC",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-24-d",
          "option_text": "CMS (Concurrent Mark Sweep) GC",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-25",
      "question_text": "What are Java 14+ Records (record Keyword)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-25-a",
          "option_text": "Immutable data carrier classes with auto-generated constructor, getters, equals(), hashCode(), and toString()",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-25-b",
          "option_text": "Database row representations that automatically sync with SQL tables",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-25-c",
          "option_text": "Classes specifically designed for logging telemetry records to disk",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-25-d",
          "option_text": "Mutable structures that bypass heap memory allocation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-26",
      "question_text": "What is Spring Cloud Eureka used for in a microservices architecture?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-26-a",
          "option_text": "Service Registration and Service Discovery",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-26-b",
          "option_text": "Distributed transaction coordinator",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-26-c",
          "option_text": "Centralized API rate limiting gateway",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-26-d",
          "option_text": "Cloud storage bucket synchronization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-27",
      "question_text": "What is the purpose of the Java Stream.map() operation?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-27-a",
          "option_text": "An intermediate operation that transforms each element of the stream by applying a function",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-27-b",
          "option_text": "A terminal operation that converts the stream into a java.util.Map",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-27-c",
          "option_text": "A filtering operation that drops null values",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-27-d",
          "option_text": "A reduction operation calculating the sum of elements",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-28",
      "question_text": "What is the difference between fail-fast and fail-safe iterators in Java collections?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-28-a",
          "option_text": "Fail-fast throws ConcurrentModificationException if collection is modified during iteration; fail-safe iterates over a copy",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-28-b",
          "option_text": "Fail-fast continues iterating on errors; fail-safe stops iteration",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-28-c",
          "option_text": "Fail-fast is thread-safe; fail-safe is unsynchronized",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-28-d",
          "option_text": "Fail-fast works on arrays; fail-safe works on queues",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-29",
      "question_text": "In Maven, what is the role of the pom.xml file?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-29-a",
          "option_text": "Defines project configuration, dependencies, plugins, and build lifecycle goals (Project Object Model)",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-29-b",
          "option_text": "Stores runtime database connection passwords",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-29-c",
          "option_text": "Compiles Java bytecode into native machine executables",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-29-d",
          "option_text": "Manages git branch merge conflicts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "java-backend-architecture-30",
      "question_text": "What design pattern does the Spring Framework BeanFactory and ApplicationContext implement?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "java-backend-architecture-30-a",
          "option_text": "Factory Pattern and Inversion of Control Container",
          "is_correct": true
        },
        {
          "id": "java-backend-architecture-30-b",
          "option_text": "Observer Pattern exclusively",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-30-c",
          "option_text": "Decorator Pattern exclusively",
          "is_correct": false
        },
        {
          "id": "java-backend-architecture-30-d",
          "option_text": "Singleton Anti-Pattern",
          "is_correct": false
        }
      ]
    }
  ],
  "cloud-devops": [
    {
      "id": "cloud-devops-1",
      "question_text": "What is the key difference between a Docker container and a Virtual Machine (VM)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-1-a",
          "option_text": "Containers share the host OS kernel and isolate at process level; VMs run a full guest OS on top of a hypervisor",
          "is_correct": true
        },
        {
          "id": "cloud-devops-1-b",
          "option_text": "Containers require a dedicated hypervisor; VMs do not",
          "is_correct": false
        },
        {
          "id": "cloud-devops-1-c",
          "option_text": "VMs start up in milliseconds; containers take minutes to boot",
          "is_correct": false
        },
        {
          "id": "cloud-devops-1-d",
          "option_text": "Containers can only run Python applications; VMs run any language",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-2",
      "question_text": "In Kubernetes, what is a Pod?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-2-a",
          "option_text": "The smallest deployable computing unit in K8s, encapsulating one or more containers sharing network and storage",
          "is_correct": true
        },
        {
          "id": "cloud-devops-2-b",
          "option_text": "A physical server rack inside a cloud provider datacenter",
          "is_correct": false
        },
        {
          "id": "cloud-devops-2-c",
          "option_text": "A continuous integration build pipeline runner",
          "is_correct": false
        },
        {
          "id": "cloud-devops-2-d",
          "option_text": "A load balancer that distributes traffic across AWS regions",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-3",
      "question_text": "In Docker, what is the primary advantage of a Multi-Stage Build?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-3-a",
          "option_text": "Keeps production images lean by discarding build-time SDKs and dependencies from the final runtime image",
          "is_correct": true
        },
        {
          "id": "cloud-devops-3-b",
          "option_text": "Enables running multiple containers inside a single Docker image",
          "is_correct": false
        },
        {
          "id": "cloud-devops-3-c",
          "option_text": "Allows building images across multiple cloud providers simultaneously",
          "is_correct": false
        },
        {
          "id": "cloud-devops-3-d",
          "option_text": "Automatically encrypts Docker image layers with AES-256",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-4",
      "question_text": "What is the primary function of Kubernetes Ingress?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-4-a",
          "option_text": "Managing external HTTP and HTTPS routing into services within a Kubernetes cluster",
          "is_correct": true
        },
        {
          "id": "cloud-devops-4-b",
          "option_text": "Scraping Prometheus metrics from cluster nodes",
          "is_correct": false
        },
        {
          "id": "cloud-devops-4-c",
          "option_text": "Allocating persistent SSD storage volumes to worker nodes",
          "is_correct": false
        },
        {
          "id": "cloud-devops-4-d",
          "option_text": "Managing container restart policies on node failure",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-5",
      "question_text": "What is Infrastructure as Code (IaC), and what tool is widely used to achieve it declaratively across multiple clouds?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-5-a",
          "option_text": "Managing and provisioning cloud infrastructure through version-controlled code; Terraform",
          "is_correct": true
        },
        {
          "id": "cloud-devops-5-b",
          "option_text": "Manually clicking cloud console buttons; AWS Management Console",
          "is_correct": false
        },
        {
          "id": "cloud-devops-5-c",
          "option_text": "Writing shell scripts executed via SSH on live servers; Bash",
          "is_correct": false
        },
        {
          "id": "cloud-devops-5-d",
          "option_text": "Configuring routers via telnet; PuTTY",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-6",
      "question_text": "What is the difference between Continuous Integration (CI) and Continuous Deployment (CD)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-6-a",
          "option_text": "CI automatically builds and tests code changes; CD automatically deploys validated code to production",
          "is_correct": true
        },
        {
          "id": "cloud-devops-6-b",
          "option_text": "CI is for frontend applications; CD is for backend databases",
          "is_correct": false
        },
        {
          "id": "cloud-devops-6-c",
          "option_text": "CI requires manual approval; CD is always manual",
          "is_correct": false
        },
        {
          "id": "cloud-devops-6-d",
          "option_text": "CI manages cloud infrastructure; CD monitors server CPU usage",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-7",
      "question_text": "In AWS networking, what is the difference between a Public Subnet and a Private Subnet?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-7-a",
          "option_text": "Public subnets have direct routing to an Internet Gateway; Private subnets route outbound traffic through a NAT Gateway",
          "is_correct": true
        },
        {
          "id": "cloud-devops-7-b",
          "option_text": "Public subnets are free; Private subnets are paid",
          "is_correct": false
        },
        {
          "id": "cloud-devops-7-c",
          "option_text": "Public subnets run Linux; Private subnets run Windows",
          "is_correct": false
        },
        {
          "id": "cloud-devops-7-d",
          "option_text": "Public subnets cannot run databases; Private subnets cannot run web servers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-8",
      "question_text": "What is a Blue-Green Deployment strategy?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-8-a",
          "option_text": "Maintaining two identical production environments, switching traffic to the new version once verified to eliminate downtime",
          "is_correct": true
        },
        {
          "id": "cloud-devops-8-b",
          "option_text": "Gradually routing 5% of traffic to the new version and scaling up based on metrics",
          "is_correct": false
        },
        {
          "id": "cloud-devops-8-c",
          "option_text": "Deploying updates to half the servers on Mondays and the other half on Fridays",
          "is_correct": false
        },
        {
          "id": "cloud-devops-8-d",
          "option_text": "Deploying code changes directly into live running container processes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-9",
      "question_text": "What are the three core pillars of Observability in modern distributed systems?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-9-a",
          "option_text": "Metrics, Logs, and Traces",
          "is_correct": true
        },
        {
          "id": "cloud-devops-9-b",
          "option_text": "CPU, RAM, and Disk",
          "is_correct": false
        },
        {
          "id": "cloud-devops-9-c",
          "option_text": "Latency, Bandwidth, and Throughput",
          "is_correct": false
        },
        {
          "id": "cloud-devops-9-d",
          "option_text": "Alerts, Notifications, and Escalations",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-10",
      "question_text": "In Prometheus monitoring, what collection model is primarily used to gather metrics from targets?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-10-a",
          "option_text": "Pull model: Prometheus periodically scrapes HTTP /metrics endpoints exposed by targets",
          "is_correct": true
        },
        {
          "id": "cloud-devops-10-b",
          "option_text": "Push model: Targets push UDP packets to Prometheus every second",
          "is_correct": false
        },
        {
          "id": "cloud-devops-10-c",
          "option_text": "Streaming model: Targets stream binary telemetry over Kafka topics",
          "is_correct": false
        },
        {
          "id": "cloud-devops-10-d",
          "option_text": "Polling model: Prometheus queries SQL databases directly for metrics",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-11",
      "question_text": "In AWS IAM, what is the Principle of Least Privilege?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-11-a",
          "option_text": "Granting users and services only the minimum permissions necessary to perform their designated tasks",
          "is_correct": true
        },
        {
          "id": "cloud-devops-11-b",
          "option_text": "Allowing all developers administrator access to avoid deployment friction",
          "is_correct": false
        },
        {
          "id": "cloud-devops-11-c",
          "option_text": "Restricting all cloud access exclusively to the root account",
          "is_correct": false
        },
        {
          "id": "cloud-devops-11-d",
          "option_text": "Revoking permissions after 24 hours of inactivity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-12",
      "question_text": "What is the role of Kubernetes etcd in the cluster control plane?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-12-a",
          "option_text": "A consistent and highly-available distributed key-value store holding all cluster state and configuration",
          "is_correct": true
        },
        {
          "id": "cloud-devops-12-b",
          "option_text": "The network proxy that routes traffic to pods",
          "is_correct": false
        },
        {
          "id": "cloud-devops-12-c",
          "option_text": "The component that compiles container images from source code",
          "is_correct": false
        },
        {
          "id": "cloud-devops-12-d",
          "option_text": "The DNS resolver that translates external domain names",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-13",
      "question_text": "What is a Canary Deployment?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-13-a",
          "option_text": "Rolling out new code to a small subset of users/servers before promoting to the entire fleet",
          "is_correct": true
        },
        {
          "id": "cloud-devops-13-b",
          "option_text": "Deploying code exclusively to non-production staging environments",
          "is_correct": false
        },
        {
          "id": "cloud-devops-13-c",
          "option_text": "Running automated penetration tests against live production endpoints",
          "is_correct": false
        },
        {
          "id": "cloud-devops-13-d",
          "option_text": "Testing database recovery by intentionally terminating instances",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-14",
      "question_text": "What is the difference between Layer 4 (L4) and Layer 7 (L7) load balancers?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-14-a",
          "option_text": "L4 routes based on IP and TCP/UDP ports; L7 inspects HTTP/HTTPS headers, paths, cookies, and payloads",
          "is_correct": true
        },
        {
          "id": "cloud-devops-14-b",
          "option_text": "L4 is for cloud environments; L7 is for on-premise datacenters",
          "is_correct": false
        },
        {
          "id": "cloud-devops-14-c",
          "option_text": "L4 encrypts SSL; L7 cannot terminate SSL certificates",
          "is_correct": false
        },
        {
          "id": "cloud-devops-14-d",
          "option_text": "L4 is software-based; L7 is hardware-based",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-15",
      "question_text": "What is GitOps?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-15-a",
          "option_text": "An operational framework using Git repositories as the single source of truth for declarative infrastructure and applications",
          "is_correct": true
        },
        {
          "id": "cloud-devops-15-b",
          "option_text": "Using git commit hooks to send Slack notifications",
          "is_correct": false
        },
        {
          "id": "cloud-devops-15-c",
          "option_text": "Hosting git repositories on AWS S3 buckets",
          "is_correct": false
        },
        {
          "id": "cloud-devops-15-d",
          "option_text": "Deploying applications by running git pull on production servers via cron",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-16",
      "question_text": "In Kubernetes, what is a ReplicaSet?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-16-a",
          "option_text": "Maintains a stable set of identical replica Pods running at any given time",
          "is_correct": true
        },
        {
          "id": "cloud-devops-16-b",
          "option_text": "Creates database read-replicas in AWS RDS",
          "is_correct": false
        },
        {
          "id": "cloud-devops-16-c",
          "option_text": "Backs up cluster logs to Amazon Glacier",
          "is_correct": false
        },
        {
          "id": "cloud-devops-16-d",
          "option_text": "Replicates container images across multiple Docker registries",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-17",
      "question_text": "What AWS service provides serverless compute that executes code in response to events without provisioning servers?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-17-a",
          "option_text": "AWS Lambda",
          "is_correct": true
        },
        {
          "id": "cloud-devops-17-b",
          "option_text": "Amazon EC2",
          "is_correct": false
        },
        {
          "id": "cloud-devops-17-c",
          "option_text": "Amazon ECS",
          "is_correct": false
        },
        {
          "id": "cloud-devops-17-d",
          "option_text": "Amazon EMR",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-18",
      "question_text": "What is the purpose of a Reverse Proxy like Nginx in a production architecture?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-18-a",
          "option_text": "Sits in front of backend servers handling SSL termination, reverse caching, load balancing, and rate limiting",
          "is_correct": true
        },
        {
          "id": "cloud-devops-18-b",
          "option_text": "Translates domain names to IP addresses for web browsers",
          "is_correct": false
        },
        {
          "id": "cloud-devops-18-c",
          "option_text": "Connects client browsers directly to physical database sockets",
          "is_correct": false
        },
        {
          "id": "cloud-devops-18-d",
          "option_text": "Compresses images before uploading them to Git repositories",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-19",
      "question_text": "In Docker, what is the difference between the CMD and ENTRYPOINT instructions in a Dockerfile?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-19-a",
          "option_text": "ENTRYPOINT sets the default executable; CMD provides default arguments that can be easily overridden at runtime",
          "is_correct": true
        },
        {
          "id": "cloud-devops-19-b",
          "option_text": "CMD is mandatory; ENTRYPOINT is optional",
          "is_correct": false
        },
        {
          "id": "cloud-devops-19-c",
          "option_text": "CMD sets environment variables; ENTRYPOINT copies files",
          "is_correct": false
        },
        {
          "id": "cloud-devops-19-d",
          "option_text": "ENTRYPOINT runs during docker build; CMD runs during docker push",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-20",
      "question_text": "What tool is commonly used for distributed tracing across microservices to visualize request latency breakdown?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-20-a",
          "option_text": "Jaeger / OpenTelemetry",
          "is_correct": true
        },
        {
          "id": "cloud-devops-20-b",
          "option_text": "Logstash",
          "is_correct": false
        },
        {
          "id": "cloud-devops-20-c",
          "option_text": "Nginx",
          "is_correct": false
        },
        {
          "id": "cloud-devops-20-d",
          "option_text": "Docker Compose",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-21",
      "question_text": "In Kubernetes, what is a ConfigMap?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-21-a",
          "option_text": "An API object used to store non-confidential configuration data in key-value pairs separated from container image",
          "is_correct": true
        },
        {
          "id": "cloud-devops-21-b",
          "option_text": "A network routing table for inter-pod communication",
          "is_correct": false
        },
        {
          "id": "cloud-devops-21-c",
          "option_text": "A visual GUI dashboard mapping pod resource usage",
          "is_correct": false
        },
        {
          "id": "cloud-devops-21-d",
          "option_text": "A cluster deployment script written in Python",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-22",
      "question_text": "What AWS storage service provides scalable, durable object storage accessible over HTTP via REST APIs?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-22-a",
          "option_text": "Amazon S3 (Simple Storage Service)",
          "is_correct": true
        },
        {
          "id": "cloud-devops-22-b",
          "option_text": "Amazon EBS (Elastic Block Store)",
          "is_correct": false
        },
        {
          "id": "cloud-devops-22-c",
          "option_text": "Amazon EFS (Elastic File System)",
          "is_correct": false
        },
        {
          "id": "cloud-devops-22-d",
          "option_text": "AWS Storage Gateway",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-23",
      "question_text": "What is the primary benefit of Immutable Infrastructure in cloud environments?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-23-a",
          "option_text": "Eliminates configuration drift by replacing servers rather than modifying running servers in-place",
          "is_correct": true
        },
        {
          "id": "cloud-devops-23-b",
          "option_text": "Reduces monthly cloud computing billing rates by 50%",
          "is_correct": false
        },
        {
          "id": "cloud-devops-23-c",
          "option_text": "Guarantees that software will never encounter memory leaks",
          "is_correct": false
        },
        {
          "id": "cloud-devops-23-d",
          "option_text": "Enables servers to run without operating system kernels",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-24",
      "question_text": "What does the Kubernetes Horizontal Pod Autoscaler (HPA) do?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-24-a",
          "option_text": "Automatically scales the number of Pod replicas in a deployment based on observed CPU/memory utilization",
          "is_correct": true
        },
        {
          "id": "cloud-devops-24-b",
          "option_text": "Adds additional physical CPU cores to worker node motherboards",
          "is_correct": false
        },
        {
          "id": "cloud-devops-24-c",
          "option_text": "Increases pod network bandwidth allocation during high traffic",
          "is_correct": false
        },
        {
          "id": "cloud-devops-24-d",
          "option_text": "Moves pods between AWS availability zones automatically",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-25",
      "question_text": "What is HashiCorp Vault primarily used for in DevOps workflows?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-25-a",
          "option_text": "Securely managing, storing, and tightly controlling access to secrets, tokens, API keys, and certificates",
          "is_correct": true
        },
        {
          "id": "cloud-devops-25-b",
          "option_text": "Compiling Docker images from source code",
          "is_correct": false
        },
        {
          "id": "cloud-devops-25-c",
          "option_text": "Monitoring Kubernetes pod memory consumption",
          "is_correct": false
        },
        {
          "id": "cloud-devops-25-d",
          "option_text": "Hosting private Git repositories with branch protection",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-26",
      "question_text": "What is a Dead Letter Queue (DLQ) in message queuing systems (e.g. RabbitMQ, AWS SQS)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-26-a",
          "option_text": "A queue that isolates messages that cannot be processed successfully after a designated number of retry attempts",
          "is_correct": true
        },
        {
          "id": "cloud-devops-26-b",
          "option_text": "A queue that deletes all messages when consumer memory exceeds 80%",
          "is_correct": false
        },
        {
          "id": "cloud-devops-26-c",
          "option_text": "A high-priority queue that bypasses standard rate limits",
          "is_correct": false
        },
        {
          "id": "cloud-devops-26-d",
          "option_text": "A queue reserved for administrative system broadcast notices",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-27",
      "question_text": "In CI/CD, what is the role of a Linter (e.g. ESLint, Flake8)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-27-a",
          "option_text": "Analyzes source code statically to flag programming errors, stylistic bugs, and anti-patterns before execution",
          "is_correct": true
        },
        {
          "id": "cloud-devops-27-b",
          "option_text": "Compiles source code into production binary executables",
          "is_correct": false
        },
        {
          "id": "cloud-devops-27-c",
          "option_text": "Deploys artifacts to staging environments automatically",
          "is_correct": false
        },
        {
          "id": "cloud-devops-27-d",
          "option_text": "Generates mock database fixtures for unit tests",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-28",
      "question_text": "What is Chaos Engineering (e.g. Chaos Monkey)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-28-a",
          "option_text": "The discipline of experimenting on a system to build confidence in its capability to withstand turbulent conditions in production",
          "is_correct": true
        },
        {
          "id": "cloud-devops-28-b",
          "option_text": "Intentionally deploying untested code to production on Fridays",
          "is_correct": false
        },
        {
          "id": "cloud-devops-28-c",
          "option_text": "Writing microservices without automated unit test coverage",
          "is_correct": false
        },
        {
          "id": "cloud-devops-28-d",
          "option_text": "Disabling database backups to test manual recovery procedures",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-29",
      "question_text": "In Kubernetes, what is a StatefulSet used for instead of a Deployment?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-29-a",
          "option_text": "Managing stateful applications (e.g. databases, Kafka) requiring unique identities and persistent stable storage per pod",
          "is_correct": true
        },
        {
          "id": "cloud-devops-29-b",
          "option_text": "Deploying stateless web APIs that can be scaled up or down interchangeably",
          "is_correct": false
        },
        {
          "id": "cloud-devops-29-c",
          "option_text": "Running batch jobs that terminate upon successful completion",
          "is_correct": false
        },
        {
          "id": "cloud-devops-29-d",
          "option_text": "Managing cluster-wide DaemonSet networking plugins",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cloud-devops-30",
      "question_text": "What is Zero Trust Network Access (ZTNA) in modern DevOps architectures?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cloud-devops-30-a",
          "option_text": "Requires strict identity verification for every person and device trying to access private network resources, regardless of perimeter",
          "is_correct": true
        },
        {
          "id": "cloud-devops-30-b",
          "option_text": "Granting access automatically to any device connected to the office Wi-Fi",
          "is_correct": false
        },
        {
          "id": "cloud-devops-30-c",
          "option_text": "Disabling encryption between internal microservices to reduce latency",
          "is_correct": false
        },
        {
          "id": "cloud-devops-30-d",
          "option_text": "Allowing public access to all staging environments",
          "is_correct": false
        }
      ]
    }
  ],
  "cybersecurity-ethical-hacking": [
    {
      "id": "cybersecurity-ethical-hacking-1",
      "question_text": "What are the three components of the CIA Triad in Information Security?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-1-a",
          "option_text": "Confidentiality, Integrity, Availability",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-1-b",
          "option_text": "Control, Inspection, Authorization",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-1-c",
          "option_text": "Cryptography, Identification, Authentication",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-1-d",
          "option_text": "Centralization, Isolation, Access",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-2",
      "question_text": "What is the primary difference between Symmetric and Asymmetric Encryption?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-2-a",
          "option_text": "Symmetric uses the same key for encryption and decryption (e.g. AES); Asymmetric uses a public/private keypair (e.g. RSA)",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-2-b",
          "option_text": "Symmetric uses public keys; Asymmetric uses private keys only",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-2-c",
          "option_text": "Symmetric is one-way hashing; Asymmetric is reversible",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-2-d",
          "option_text": "Symmetric encryption cannot be decrypted once applied",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-3",
      "question_text": "What is a Cryptographic Hash function (e.g. SHA-256), and what is its primary property?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-3-a",
          "option_text": "A one-way deterministic mathematical function producing a fixed-size digest that cannot be reversed",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-3-b",
          "option_text": "A two-way algorithm used to encrypt confidential customer passwords",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-3-c",
          "option_text": "A compression algorithm that reduces file sizes by 50%",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-3-d",
          "option_text": "A random number generator that produces unique integers per second",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-4",
      "question_text": "Why is \"Salting\" essential when storing hashed passwords in a database?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-4-a",
          "option_text": "It appends unique random data to each password before hashing, defeating precomputed Rainbow Table attacks",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-4-b",
          "option_text": "It encrypts the hash with a master AES-256 key",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-4-c",
          "option_text": "It compresses the password hash so it fits in smaller database columns",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-4-d",
          "option_text": "It allows administrators to recover lost passwords on request",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-5",
      "question_text": "What is Cross-Site Scripting (XSS)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-5-a",
          "option_text": "A vulnerability where an attacker injects malicious client-side JavaScript that executes in other users' browsers",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-5-b",
          "option_text": "An attack where SQL commands are injected into database forms",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-5-c",
          "option_text": "An attack that floods network bandwidth with UDP packets",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-5-d",
          "option_text": "An attack that steals physical hard drives from datacenters",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-6",
      "question_text": "What is Cross-Site Request Forgery (CSRF)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-6-a",
          "option_text": "An attack that tricks an authenticated victim into executing unwanted state-changing actions on a trusted web application",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-6-b",
          "option_text": "Injecting malicious scripts into public web forums",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-6-c",
          "option_text": "Intercepting Wi-Fi packets using a rogue access point",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-6-d",
          "option_text": "Cracking passwords using brute-force dictionary attacks",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-7",
      "question_text": "How does a Web Application Firewall (WAF) differ from a traditional Network Firewall?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-7-a",
          "option_text": "A WAF inspects application layer (Layer 7) HTTP/HTTPS traffic for web attacks; Network firewalls filter network packets (Layers 3-4)",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-7-b",
          "option_text": "A WAF protects against physical hardware theft; Network firewalls protect Wi-Fi",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-7-c",
          "option_text": "A WAF is only for cloud environments; Network firewalls are for home routers",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-7-d",
          "option_text": "A WAF replaces the need for SSL/TLS certificates",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-8",
      "question_text": "What is a Man-In-The-Middle (MITM) attack, and how is it primarily mitigated?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-8-a",
          "option_text": "An attacker intercepts communication between two parties; mitigated by end-to-end TLS/HTTPS encryption and certificate verification",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-8-b",
          "option_text": "An attacker uses brute force against passwords; mitigated by MFA",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-8-c",
          "option_text": "An attacker floods server CPU; mitigated by auto-scaling",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-8-d",
          "option_text": "An attacker steals cookies; mitigated by disabling JavaScript",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-9",
      "question_text": "What is the role of an ARP Spoofing attack on a Local Area Network (LAN)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-9-a",
          "option_text": "Associating the attacker's MAC address with the IP address of the legitimate default gateway to intercept LAN traffic",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-9-b",
          "option_text": "Cracking WPA2 Wi-Fi encryption passphrases",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-9-c",
          "option_text": "Flooding the network switch with random MAC addresses to cause a broadcast storm",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-9-d",
          "option_text": "Spoofing DNS root server certificates",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-10",
      "question_text": "What vulnerability category ranks consistently as #1 in the OWASP Top 10 web security risks?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-10-a",
          "option_text": "Broken Access Control",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-10-b",
          "option_text": "Security Misconfiguration",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-10-c",
          "option_text": "Software and Data Integrity Failures",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-10-d",
          "option_text": "Cryptographic Failures",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-11",
      "question_text": "What is a Buffer Overflow vulnerability in low-level languages like C/C++?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-11-a",
          "option_text": "Writing data past the boundary of an allocated buffer, overwriting adjacent memory and potentially hijacking control flow",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-11-b",
          "option_text": "Reading past the end of a database result set",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-11-c",
          "option_text": "Exhausting network buffer queues on high traffic",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-11-d",
          "option_text": "Allocating more memory on the heap than available physical RAM",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-12",
      "question_text": "What is the difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-12-a",
          "option_text": "An IDS passively monitors and alerts on suspicious traffic; an IPS sits in-line and actively drops or blocks malicious traffic",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-12-b",
          "option_text": "An IDS is hardware; an IPS is software",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-12-c",
          "option_text": "An IDS monitors outgoing traffic; an IPS monitors incoming traffic",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-12-d",
          "option_text": "An IDS is only for wireless networks; an IPS is for wired networks",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-13",
      "question_text": "In penetration testing, what tool is considered the industry standard for port scanning and network service enumeration?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-13-a",
          "option_text": "Nmap",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-13-b",
          "option_text": "Burp Suite",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-13-c",
          "option_text": "Wireshark",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-13-d",
          "option_text": "Metasploit",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-14",
      "question_text": "What does the HTTP header \"Content-Security-Policy\" (CSP) help prevent?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-14-a",
          "option_text": "Cross-Site Scripting (XSS) and data injection by specifying approved origins for executable scripts and resources",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-14-b",
          "option_text": "SQL Injection by sanitizing database queries",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-14-c",
          "option_text": "DDoS attacks by rate limiting requests per IP",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-14-d",
          "option_text": "MITM attacks by enforcing HTTPS connections",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-15",
      "question_text": "What is a Zero-Day Vulnerability?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-15-a",
          "option_text": "A software vulnerability that is known to attackers or researchers but has no available patch from the vendor",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-15-b",
          "option_text": "A vulnerability that requires zero technical skill to exploit",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-15-c",
          "option_text": "A security flaw that automatically resolves itself within 24 hours",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-15-d",
          "option_text": "A bug that was introduced on day zero of project creation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-16",
      "question_text": "What are the three factors in Multi-Factor Authentication (MFA)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-16-a",
          "option_text": "Something you know (password), Something you have (device/token), Something you are (biometrics)",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-16-b",
          "option_text": "Username, Password, Security Question",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-16-c",
          "option_text": "Email, Phone Number, Home Address",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-16-d",
          "option_text": "Fingerprint, Face ID, Retina Scan",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-17",
      "question_text": "What is DNS Spoofing (DNS Cache Poisoning)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-17-a",
          "option_text": "Injecting fraudulent DNS records into a recursive resolver cache to redirect users to malicious IP addresses",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-17-b",
          "option_text": "Stealing domain ownership through registrar account takeovers",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-17-c",
          "option_text": "Flooding authoritative DNS name servers with NXDOMAIN queries",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-17-d",
          "option_text": "Modifying local /etc/hosts files via administrative access",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-18",
      "question_text": "What security principle dictates that a user should be granted the minimum permissions required to perform their job?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-18-a",
          "option_text": "Principle of Least Privilege",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-18-b",
          "option_text": "Defense in Depth",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-18-c",
          "option_text": "Fail-Safe Defaults",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-18-d",
          "option_text": "Separation of Duties",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-19",
      "question_text": "In Cryptography, what is a \"Nonce\"?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-19-a",
          "option_text": "An arbitrary number used only once in cryptographic communications to prevent replay attacks",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-19-b",
          "option_text": "A master private key stored in an HSM",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-19-c",
          "option_text": "A mathematical constant used to calculate prime numbers",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-19-d",
          "option_text": "An encrypted password hash stored on disk",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-20",
      "question_text": "What is a Honeypot in defensive cyber operations?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-20-a",
          "option_text": "A decoy system deliberately exposed to detect, deflect, and study unauthorized attacker techniques",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-20-b",
          "option_text": "A password manager that auto-fills encrypted credentials",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-20-c",
          "option_text": "A secure enclave inside CPU hardware (e.g. Intel SGX)",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-20-d",
          "option_text": "A cryptographic vault that stores administrative SSH keys",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-21",
      "question_text": "What does the HTTP response header \"X-Frame-Options: DENY\" prevent?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-21-a",
          "option_text": "Clickjacking attacks by disallowing the page from being embedded in an <iframe>",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-21-b",
          "option_text": "Cross-Site Scripting by disabling JavaScript frames",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-21-c",
          "option_text": "SQL Injection by denying framed query strings",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-21-d",
          "option_text": "Cookie theft by denying cross-origin frames",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-22",
      "question_text": "What is a Distributed Denial of Service (DDoS) attack using a \"Botnet\"?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-22-a",
          "option_text": "Overwhelming a target server with traffic coordinated across thousands of compromised Internet-connected devices",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-22-b",
          "option_text": "Cracking database passwords using a cluster of GPU servers",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-22-c",
          "option_text": "Sending deceptive phishing emails to company employees",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-22-d",
          "option_text": "Intercepting cellular SMS authentication tokens",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-23",
      "question_text": "What is the role of a Security Information and Event Management (SIEM) platform (e.g. Splunk, Microsoft Sentinel)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-23-a",
          "option_text": "Aggregating, correlating, and analyzing log data across an enterprise in real time to detect security incidents",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-23-b",
          "option_text": "Deploying firewalls automatically to cloud subnets",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-23-c",
          "option_text": "Encrypting hard drive partitions on employee laptops",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-23-d",
          "option_text": "Conducting automated black-box penetration testing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-24",
      "question_text": "In Public Key Infrastructure (PKI), what is the function of a Certificate Authority (CA)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-24-a",
          "option_text": "A trusted third-party entity that issues and digitally signs certificates verifying the identity of public key owners",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-24-b",
          "option_text": "An agency that manages global DNS domain name assignments",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-24-c",
          "option_text": "A hardware device that encrypts network traffic at the router level",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-24-d",
          "option_text": "A server that stores encrypted user passwords",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-25",
      "question_text": "What is Ransomware?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-25-a",
          "option_text": "Malware that encrypts victim files and demands payment in cryptocurrency in exchange for decryption keys",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-25-b",
          "option_text": "Spyware that logs keystrokes to steal bank account credentials",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-25-c",
          "option_text": "A virus that deletes operating system system32 files",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-25-d",
          "option_text": "Adware that displays unwanted popup advertisements",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-26",
      "question_text": "What is the difference between Black-Box and White-Box Penetration Testing?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-26-a",
          "option_text": "Black-Box simulates an external attacker with zero prior knowledge; White-Box provides full internal architecture and source code access",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-26-b",
          "option_text": "Black-Box is illegal; White-Box is legal",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-26-c",
          "option_text": "Black-Box is for cloud; White-Box is for hardware",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-26-d",
          "option_text": "Black-Box tests firewalls; White-Box tests web applications",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-27",
      "question_text": "What is Privilege Escalation in cyber attacks?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-27-a",
          "option_text": "Exploiting a bug, design flaw, or configuration error to gain higher access permissions than originally intended (e.g. root/admin)",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-27-b",
          "option_text": "Increasing network bandwidth to execute DDoS attacks faster",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-27-c",
          "option_text": "Cracking password hashes using rainbow tables",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-27-d",
          "option_text": "Bypassing web application firewalls with encoded characters",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-28",
      "question_text": "What is the purpose of HSTS (HTTP Strict Transport Security)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-28-a",
          "option_text": "Forces browsers to communicate with the domain exclusively over HTTPS, protecting against SSL-stripping attacks",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-28-b",
          "option_text": "Enforces multi-factor authentication on every HTTP login",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-28-c",
          "option_text": "Limits HTTP request rates to prevent brute force attacks",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-28-d",
          "option_text": "Restricts HTTP access to approved IP whitelist ranges",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-29",
      "question_text": "In Wi-Fi security, what vulnerability in WPA2 allows attackers within radio range to intercept and decrypt Wi-Fi traffic?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-29-a",
          "option_text": "KRACK (Key Reinstallation Attack)",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-29-b",
          "option_text": "Heartbleed",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-29-c",
          "option_text": "Shellshock",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-29-d",
          "option_text": "EternalBlue",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cybersecurity-ethical-hacking-30",
      "question_text": "What does the \"Defense in Depth\" security strategy entail?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cybersecurity-ethical-hacking-30-a",
          "option_text": "Deploying multiple layered security controls throughout an IT system rather than relying on a single defensive barrier",
          "is_correct": true
        },
        {
          "id": "cybersecurity-ethical-hacking-30-b",
          "option_text": "Protecting the physical datacenter with biometric locks and armed guards only",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-30-c",
          "option_text": "Encrypting data only when at rest on persistent disks",
          "is_correct": false
        },
        {
          "id": "cybersecurity-ethical-hacking-30-d",
          "option_text": "Relying exclusively on a next-generation web application firewall",
          "is_correct": false
        }
      ]
    }
  ],
  "dsa": [
    {
      "id": "dsa-1",
      "question_text": "What is the worst-case time complexity of searching for an element in an unbalanced Binary Search Tree (BST)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-1-a",
          "option_text": "O(n)",
          "is_correct": true
        },
        {
          "id": "dsa-1-b",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "dsa-1-c",
          "option_text": "O(1)",
          "is_correct": false
        },
        {
          "id": "dsa-1-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-2",
      "question_text": "Which data structure operates strictly on a First-In-First-Out (FIFO) principle?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-2-a",
          "option_text": "Queue",
          "is_correct": true
        },
        {
          "id": "dsa-2-b",
          "option_text": "Stack",
          "is_correct": false
        },
        {
          "id": "dsa-2-c",
          "option_text": "Binary Heap",
          "is_correct": false
        },
        {
          "id": "dsa-2-d",
          "option_text": "Priority Queue",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-3",
      "question_text": "What is the average time complexity of QuickSort on an array of n elements?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-3-a",
          "option_text": "O(n log n)",
          "is_correct": true
        },
        {
          "id": "dsa-3-b",
          "option_text": "O(n^2)",
          "is_correct": false
        },
        {
          "id": "dsa-3-c",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-3-d",
          "option_text": "O(log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-4",
      "question_text": "In a Hash Table, what technique resolves collisions by storing multiple entries in a linked list at the same bucket index?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-4-a",
          "option_text": "Separate Chaining",
          "is_correct": true
        },
        {
          "id": "dsa-4-b",
          "option_text": "Linear Probing",
          "is_correct": false
        },
        {
          "id": "dsa-4-c",
          "option_text": "Quadratic Probing",
          "is_correct": false
        },
        {
          "id": "dsa-4-d",
          "option_text": "Double Hashing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-5",
      "question_text": "Which algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edges?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-5-a",
          "option_text": "Dijkstra's Algorithm",
          "is_correct": true
        },
        {
          "id": "dsa-5-b",
          "option_text": "Kruskal's Algorithm",
          "is_correct": false
        },
        {
          "id": "dsa-5-c",
          "option_text": "Prim's Algorithm",
          "is_correct": false
        },
        {
          "id": "dsa-5-d",
          "option_text": "Floyd-Warshall Algorithm",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-6",
      "question_text": "What data structure is typically used to implement Breadth-First Search (BFS) on a graph?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-6-a",
          "option_text": "Queue",
          "is_correct": true
        },
        {
          "id": "dsa-6-b",
          "option_text": "Stack",
          "is_correct": false
        },
        {
          "id": "dsa-6-c",
          "option_text": "Min Heap",
          "is_correct": false
        },
        {
          "id": "dsa-6-d",
          "option_text": "Binary Search Tree",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-7",
      "question_text": "What is the minimum number of queues needed to implement a Stack efficiently?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-7-a",
          "option_text": "2",
          "is_correct": true
        },
        {
          "id": "dsa-7-b",
          "option_text": "1",
          "is_correct": false
        },
        {
          "id": "dsa-7-c",
          "option_text": "3",
          "is_correct": false
        },
        {
          "id": "dsa-7-d",
          "option_text": "4",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-8",
      "question_text": "Which sorting algorithm is guaranteed to be stable and have an O(n log n) worst-case time complexity?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-8-a",
          "option_text": "MergeSort",
          "is_correct": true
        },
        {
          "id": "dsa-8-b",
          "option_text": "QuickSort",
          "is_correct": false
        },
        {
          "id": "dsa-8-c",
          "option_text": "HeapSort",
          "is_correct": false
        },
        {
          "id": "dsa-8-d",
          "option_text": "Selection Sort",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-9",
      "question_text": "What is the height of a balanced Binary Tree having n nodes?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-9-a",
          "option_text": "O(log n)",
          "is_correct": true
        },
        {
          "id": "dsa-9-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-9-c",
          "option_text": "O(n^2)",
          "is_correct": false
        },
        {
          "id": "dsa-9-d",
          "option_text": "O(1)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-10",
      "question_text": "Which data structure is best suited for checking whether parentheses in a mathematical expression are balanced?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "dsa-10-a",
          "option_text": "Stack",
          "is_correct": true
        },
        {
          "id": "dsa-10-b",
          "option_text": "Queue",
          "is_correct": false
        },
        {
          "id": "dsa-10-c",
          "option_text": "Array",
          "is_correct": false
        },
        {
          "id": "dsa-10-d",
          "option_text": "Linked List",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-11",
      "question_text": "What is the time complexity of inserting a node at the head of a Singly Linked List if the head pointer is known?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-11-a",
          "option_text": "O(1)",
          "is_correct": true
        },
        {
          "id": "dsa-11-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-11-c",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "dsa-11-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-12",
      "question_text": "What is the primary characteristic of an AVL Tree?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-12-a",
          "option_text": "The heights of the two child subtrees of any node differ by at most one",
          "is_correct": true
        },
        {
          "id": "dsa-12-b",
          "option_text": "All leaves are at the exact same depth",
          "is_correct": false
        },
        {
          "id": "dsa-12-c",
          "option_text": "Nodes can have up to three children",
          "is_correct": false
        },
        {
          "id": "dsa-12-d",
          "option_text": "Elements are stored in descending order only",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-13",
      "question_text": "Which algorithmic paradigm does the '0/1 Knapsack Problem' typically utilize for an optimal polynomial-time solution?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-13-a",
          "option_text": "Dynamic Programming",
          "is_correct": true
        },
        {
          "id": "dsa-13-b",
          "option_text": "Greedy Approach",
          "is_correct": false
        },
        {
          "id": "dsa-13-c",
          "option_text": "Divide and Conquer",
          "is_correct": false
        },
        {
          "id": "dsa-13-d",
          "option_text": "Backtracking only",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-14",
      "question_text": "What is the space complexity of an in-place HeapSort algorithm?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-14-a",
          "option_text": "O(1)",
          "is_correct": true
        },
        {
          "id": "dsa-14-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-14-c",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "dsa-14-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-15",
      "question_text": "In a Red-Black tree, what color must the root node always be?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-15-a",
          "option_text": "Black",
          "is_correct": true
        },
        {
          "id": "dsa-15-b",
          "option_text": "Red",
          "is_correct": false
        },
        {
          "id": "dsa-15-c",
          "option_text": "Yellow",
          "is_correct": false
        },
        {
          "id": "dsa-15-d",
          "option_text": "Blue",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-16",
      "question_text": "Which algorithm finds the Minimum Spanning Tree (MST) by sorting all graph edges in ascending order of their weights?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-16-a",
          "option_text": "Kruskal's Algorithm",
          "is_correct": true
        },
        {
          "id": "dsa-16-b",
          "option_text": "Prim's Algorithm",
          "is_correct": false
        },
        {
          "id": "dsa-16-c",
          "option_text": "Bellman-Ford Algorithm",
          "is_correct": false
        },
        {
          "id": "dsa-16-d",
          "option_text": "Dijkstra's Algorithm",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-17",
      "question_text": "What is the time complexity of accessing an element in an array by its index?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-17-a",
          "option_text": "O(1)",
          "is_correct": true
        },
        {
          "id": "dsa-17-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-17-c",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "dsa-17-d",
          "option_text": "O(n^2)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-18",
      "question_text": "Which graph traversal strategy uses a Stack (or recursion)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-18-a",
          "option_text": "Depth-First Search (DFS)",
          "is_correct": true
        },
        {
          "id": "dsa-18-b",
          "option_text": "Breadth-First Search (BFS)",
          "is_correct": false
        },
        {
          "id": "dsa-18-c",
          "option_text": "Topological Sort via Kahn's Algorithm",
          "is_correct": false
        },
        {
          "id": "dsa-18-d",
          "option_text": "Level-order traversal",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-19",
      "question_text": "In an optimal Huffman Coding tree, which characters receive the shortest binary codes?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-19-a",
          "option_text": "Characters with the highest frequencies",
          "is_correct": true
        },
        {
          "id": "dsa-19-b",
          "option_text": "Characters with the lowest frequencies",
          "is_correct": false
        },
        {
          "id": "dsa-19-c",
          "option_text": "Vowels only",
          "is_correct": false
        },
        {
          "id": "dsa-19-d",
          "option_text": "Alphabetically first characters",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-20",
      "question_text": "What is the amortized time complexity of inserting an element into a dynamic array (like std::vector or ArrayList)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "dsa-20-a",
          "option_text": "O(1)",
          "is_correct": true
        },
        {
          "id": "dsa-20-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-20-c",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "dsa-20-d",
          "option_text": "O(n^2)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-21",
      "question_text": "Which data structure is commonly used to implement LRU (Least Recently Used) Cache with O(1) get and put operations?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-21-a",
          "option_text": "Hash Map + Doubly Linked List",
          "is_correct": true
        },
        {
          "id": "dsa-21-b",
          "option_text": "Binary Search Tree + Stack",
          "is_correct": false
        },
        {
          "id": "dsa-21-c",
          "option_text": "Array + Queue",
          "is_correct": false
        },
        {
          "id": "dsa-21-d",
          "option_text": "Single Linked List + Min Heap",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-22",
      "question_text": "What is the maximum number of children a node can have in a Binary Tree?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-22-a",
          "option_text": "2",
          "is_correct": true
        },
        {
          "id": "dsa-22-b",
          "option_text": "3",
          "is_correct": false
        },
        {
          "id": "dsa-22-c",
          "option_text": "1",
          "is_correct": false
        },
        {
          "id": "dsa-22-d",
          "option_text": "Unlimited",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-23",
      "question_text": "What does Kadane's Algorithm find in O(n) time?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-23-a",
          "option_text": "Maximum Subarray Sum",
          "is_correct": true
        },
        {
          "id": "dsa-23-b",
          "option_text": "Longest Common Subsequence",
          "is_correct": false
        },
        {
          "id": "dsa-23-c",
          "option_text": "Shortest Cycle in a Graph",
          "is_correct": false
        },
        {
          "id": "dsa-23-d",
          "option_text": "Median of Two Sorted Arrays",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-24",
      "question_text": "Which data structure is optimal for finding the median of a continuously incoming stream of numbers?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-24-a",
          "option_text": "Two Heaps (Max-Heap and Min-Heap)",
          "is_correct": true
        },
        {
          "id": "dsa-24-b",
          "option_text": "A sorted singly linked list",
          "is_correct": false
        },
        {
          "id": "dsa-24-c",
          "option_text": "A circular queue",
          "is_correct": false
        },
        {
          "id": "dsa-24-d",
          "option_text": "A stack",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-25",
      "question_text": "What is the worst-case time complexity of Bubble Sort?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-25-a",
          "option_text": "O(n^2)",
          "is_correct": true
        },
        {
          "id": "dsa-25-b",
          "option_text": "O(n log n)",
          "is_correct": false
        },
        {
          "id": "dsa-25-c",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-25-d",
          "option_text": "O(log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-26",
      "question_text": "What property must a Directed Graph satisfy to have a valid Topological Ordering?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-26-a",
          "option_text": "It must be a Directed Acyclic Graph (DAG)",
          "is_correct": true
        },
        {
          "id": "dsa-26-b",
          "option_text": "It must be strongly connected",
          "is_correct": false
        },
        {
          "id": "dsa-26-c",
          "option_text": "It must have undirected cycles",
          "is_correct": false
        },
        {
          "id": "dsa-26-d",
          "option_text": "It must have equal in-degrees and out-degrees",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-27",
      "question_text": "In a Min-Heap, where is the smallest element always located?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-27-a",
          "option_text": "At the root node",
          "is_correct": true
        },
        {
          "id": "dsa-27-b",
          "option_text": "At the leftmost leaf",
          "is_correct": false
        },
        {
          "id": "dsa-27-c",
          "option_text": "At the rightmost leaf",
          "is_correct": false
        },
        {
          "id": "dsa-27-d",
          "option_text": "At any internal node",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-28",
      "question_text": "What is the time complexity of searching in a balanced Trie for a word of length L?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-28-a",
          "option_text": "O(L)",
          "is_correct": true
        },
        {
          "id": "dsa-28-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "dsa-28-c",
          "option_text": "O(n * L)",
          "is_correct": false
        },
        {
          "id": "dsa-28-d",
          "option_text": "O(log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-29",
      "question_text": "Which of the following problems can be solved using the Disjoint Set Union (Union-Find) data structure?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-29-a",
          "option_text": "Detecting cycles in an undirected graph",
          "is_correct": true
        },
        {
          "id": "dsa-29-b",
          "option_text": "Finding all-pairs shortest paths",
          "is_correct": false
        },
        {
          "id": "dsa-29-c",
          "option_text": "Evaluating postfix expressions",
          "is_correct": false
        },
        {
          "id": "dsa-29-d",
          "option_text": "Sorting an array in linear time",
          "is_correct": false
        }
      ]
    },
    {
      "id": "dsa-30",
      "question_text": "What is the number of edges in a tree with V vertices?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "dsa-30-a",
          "option_text": "V - 1",
          "is_correct": true
        },
        {
          "id": "dsa-30-b",
          "option_text": "V",
          "is_correct": false
        },
        {
          "id": "dsa-30-c",
          "option_text": "V + 1",
          "is_correct": false
        },
        {
          "id": "dsa-30-d",
          "option_text": "2 * V",
          "is_correct": false
        }
      ]
    }
  ],
  "core-engineering": [
    {
      "id": "core-engineering-1",
      "question_text": "According to Newton's Second Law of Motion, what is the mathematical formula for force?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-1-a",
          "option_text": "F = m * a",
          "is_correct": true
        },
        {
          "id": "core-engineering-1-b",
          "option_text": "F = m / a",
          "is_correct": false
        },
        {
          "id": "core-engineering-1-c",
          "option_text": "F = m * v^2",
          "is_correct": false
        },
        {
          "id": "core-engineering-1-d",
          "option_text": "F = 0.5 * m * v",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-2",
      "question_text": "What does Ohm's Law state for an ideal electrical resistor?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-2-a",
          "option_text": "V = I * R",
          "is_correct": true
        },
        {
          "id": "core-engineering-2-b",
          "option_text": "V = I / R",
          "is_correct": false
        },
        {
          "id": "core-engineering-2-c",
          "option_text": "P = V * R",
          "is_correct": false
        },
        {
          "id": "core-engineering-2-d",
          "option_text": "I = V * R",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-3",
      "question_text": "Which thermodynamic cycle represents the ideal theoretical maximum efficiency for a heat engine operating between two temperatures?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-3-a",
          "option_text": "Carnot Cycle",
          "is_correct": true
        },
        {
          "id": "core-engineering-3-b",
          "option_text": "Rankine Cycle",
          "is_correct": false
        },
        {
          "id": "core-engineering-3-c",
          "option_text": "Otto Cycle",
          "is_correct": false
        },
        {
          "id": "core-engineering-3-d",
          "option_text": "Diesel Cycle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-4",
      "question_text": "In structural mechanics, what does the Hooke's Law state within the elastic limit?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-4-a",
          "option_text": "Stress is directly proportional to Strain",
          "is_correct": true
        },
        {
          "id": "core-engineering-4-b",
          "option_text": "Strain is inversely proportional to Area",
          "is_correct": false
        },
        {
          "id": "core-engineering-4-c",
          "option_text": "Force equals Mass times Velocity",
          "is_correct": false
        },
        {
          "id": "core-engineering-4-d",
          "option_text": "Pressure is constant throughout the cross-section",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-5",
      "question_text": "Which semiconductor component conducts current primarily in only one direction?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-5-a",
          "option_text": "Diode",
          "is_correct": true
        },
        {
          "id": "core-engineering-5-b",
          "option_text": "Capacitor",
          "is_correct": false
        },
        {
          "id": "core-engineering-5-c",
          "option_text": "Inductor",
          "is_correct": false
        },
        {
          "id": "core-engineering-5-d",
          "option_text": "Transformer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-6",
      "question_text": "In fluid mechanics, what principle explains the lift generated by an aircraft wing due to fluid velocity and pressure differences?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-6-a",
          "option_text": "Bernoulli's Principle",
          "is_correct": true
        },
        {
          "id": "core-engineering-6-b",
          "option_text": "Archimedes' Principle",
          "is_correct": false
        },
        {
          "id": "core-engineering-6-c",
          "option_text": "Pascal's Law",
          "is_correct": false
        },
        {
          "id": "core-engineering-6-d",
          "option_text": "Fourier's Law",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-7",
      "question_text": "What is the SI unit of electrical capacitance?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-7-a",
          "option_text": "Farad",
          "is_correct": true
        },
        {
          "id": "core-engineering-7-b",
          "option_text": "Henry",
          "is_correct": false
        },
        {
          "id": "core-engineering-7-c",
          "option_text": "Tesla",
          "is_correct": false
        },
        {
          "id": "core-engineering-7-d",
          "option_text": "Weber",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-8",
      "question_text": "In civil engineering, what is the primary structural function of reinforced steel rebar inside concrete beams?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-8-a",
          "option_text": "To resist tensile stresses while concrete resists compressive stresses",
          "is_correct": true
        },
        {
          "id": "core-engineering-8-b",
          "option_text": "To prevent concrete from absorbing water",
          "is_correct": false
        },
        {
          "id": "core-engineering-8-c",
          "option_text": "To decrease the overall density of the structure",
          "is_correct": false
        },
        {
          "id": "core-engineering-8-d",
          "option_text": "To conduct electrical ground currents",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-9",
      "question_text": "Which logic gate outputs HIGH (1) if and only if all of its inputs are HIGH (1)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-9-a",
          "option_text": "AND Gate",
          "is_correct": true
        },
        {
          "id": "core-engineering-9-b",
          "option_text": "OR Gate",
          "is_correct": false
        },
        {
          "id": "core-engineering-9-c",
          "option_text": "XOR Gate",
          "is_correct": false
        },
        {
          "id": "core-engineering-9-d",
          "option_text": "NOT Gate",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-10",
      "question_text": "What type of stress occurs when opposing forces act parallel to the cross-sectional plane of a material?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-10-a",
          "option_text": "Shear Stress",
          "is_correct": true
        },
        {
          "id": "core-engineering-10-b",
          "option_text": "Tensile Stress",
          "is_correct": false
        },
        {
          "id": "core-engineering-10-c",
          "option_text": "Compressive Stress",
          "is_correct": false
        },
        {
          "id": "core-engineering-10-d",
          "option_text": "Bending Stress",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-11",
      "question_text": "What law states that the total current entering a circuit junction must equal the total current leaving that junction?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-11-a",
          "option_text": "Kirchhoff's Current Law (KCL)",
          "is_correct": true
        },
        {
          "id": "core-engineering-11-b",
          "option_text": "Kirchhoff's Voltage Law (KVL)",
          "is_correct": false
        },
        {
          "id": "core-engineering-11-c",
          "option_text": "Ampere's Law",
          "is_correct": false
        },
        {
          "id": "core-engineering-11-d",
          "option_text": "Faraday's Law",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-12",
      "question_text": "In mechanical engineering, what is the ratio of pitch diameter to the number of teeth on a gear called?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-12-a",
          "option_text": "Module",
          "is_correct": true
        },
        {
          "id": "core-engineering-12-b",
          "option_text": "Diametral Pitch",
          "is_correct": false
        },
        {
          "id": "core-engineering-12-c",
          "option_text": "Circular Pitch",
          "is_correct": false
        },
        {
          "id": "core-engineering-12-d",
          "option_text": "Addendum",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-13",
      "question_text": "What is the primary function of a step-down electrical transformer?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-13-a",
          "option_text": "Decreasing voltage while increasing current",
          "is_correct": true
        },
        {
          "id": "core-engineering-13-b",
          "option_text": "Increasing voltage while decreasing current",
          "is_correct": false
        },
        {
          "id": "core-engineering-13-c",
          "option_text": "Converting AC electricity to DC electricity",
          "is_correct": false
        },
        {
          "id": "core-engineering-13-d",
          "option_text": "Storing energy in an electrostatic field",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-14",
      "question_text": "Which property describes a material's ability to undergo significant permanent plastic deformation before fracture?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-14-a",
          "option_text": "Ductility",
          "is_correct": true
        },
        {
          "id": "core-engineering-14-b",
          "option_text": "Brittleness",
          "is_correct": false
        },
        {
          "id": "core-engineering-14-c",
          "option_text": "Hardness",
          "is_correct": false
        },
        {
          "id": "core-engineering-14-d",
          "option_text": "Resilience",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-15",
      "question_text": "In electronics, what terminal of a Bipolar Junction Transistor (BJT) controls the flow of majority carriers?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-15-a",
          "option_text": "Base",
          "is_correct": true
        },
        {
          "id": "core-engineering-15-b",
          "option_text": "Collector",
          "is_correct": false
        },
        {
          "id": "core-engineering-15-c",
          "option_text": "Emitter",
          "is_correct": false
        },
        {
          "id": "core-engineering-15-d",
          "option_text": "Gate",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-16",
      "question_text": "What type of foundation is most suitable when surface soils have low bearing capacity and structural loads must reach deep bedrock?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-16-a",
          "option_text": "Pile Foundation",
          "is_correct": true
        },
        {
          "id": "core-engineering-16-b",
          "option_text": "Strip Footing",
          "is_correct": false
        },
        {
          "id": "core-engineering-16-c",
          "option_text": "Spread Footing",
          "is_correct": false
        },
        {
          "id": "core-engineering-16-d",
          "option_text": "Isolated Pad Footing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-17",
      "question_text": "What does the First Law of Thermodynamics fundamentally express?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-17-a",
          "option_text": "Conservation of Energy",
          "is_correct": true
        },
        {
          "id": "core-engineering-17-b",
          "option_text": "Increase of Entropy",
          "is_correct": false
        },
        {
          "id": "core-engineering-17-c",
          "option_text": "Absolute zero temperature limit",
          "is_correct": false
        },
        {
          "id": "core-engineering-17-d",
          "option_text": "Thermal equilibrium between bodies",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-18",
      "question_text": "Which instrument is used to measure electrical potential difference across two points without drawing substantial current?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-18-a",
          "option_text": "Voltmeter",
          "is_correct": true
        },
        {
          "id": "core-engineering-18-b",
          "option_text": "Ammeter",
          "is_correct": false
        },
        {
          "id": "core-engineering-18-c",
          "option_text": "Ohmmeter",
          "is_correct": false
        },
        {
          "id": "core-engineering-18-d",
          "option_text": "Galvanometer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-19",
      "question_text": "What is the relationship between torque (T), rotational speed (omega), and power (P) in mechanical drives?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-19-a",
          "option_text": "P = T * omega",
          "is_correct": true
        },
        {
          "id": "core-engineering-19-b",
          "option_text": "P = T / omega",
          "is_correct": false
        },
        {
          "id": "core-engineering-19-c",
          "option_text": "P = T^2 * omega",
          "is_correct": false
        },
        {
          "id": "core-engineering-19-d",
          "option_text": "T = P * omega",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-20",
      "question_text": "In communications engineering, what modulation technique varies the frequency of a carrier wave in proportion to the message signal?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-20-a",
          "option_text": "Frequency Modulation (FM)",
          "is_correct": true
        },
        {
          "id": "core-engineering-20-b",
          "option_text": "Amplitude Modulation (AM)",
          "is_correct": false
        },
        {
          "id": "core-engineering-20-c",
          "option_text": "Phase Modulation (PM)",
          "is_correct": false
        },
        {
          "id": "core-engineering-20-d",
          "option_text": "Pulse Code Modulation (PCM)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-21",
      "question_text": "What is the point on a stress-strain curve beyond which deformation is irreversible and permanent?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-21-a",
          "option_text": "Yield Point",
          "is_correct": true
        },
        {
          "id": "core-engineering-21-b",
          "option_text": "Proportional Limit",
          "is_correct": false
        },
        {
          "id": "core-engineering-21-c",
          "option_text": "Ultimate Tensile Strength",
          "is_correct": false
        },
        {
          "id": "core-engineering-21-d",
          "option_text": "Fracture Point",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-22",
      "question_text": "What is the standard frequency of AC mains power transmission in India?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-22-a",
          "option_text": "50 Hz",
          "is_correct": true
        },
        {
          "id": "core-engineering-22-b",
          "option_text": "60 Hz",
          "is_correct": false
        },
        {
          "id": "core-engineering-22-c",
          "option_text": "100 Hz",
          "is_correct": false
        },
        {
          "id": "core-engineering-22-d",
          "option_text": "120 Hz",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-23",
      "question_text": "Which thermal transfer mechanism does not require any material medium to propagate heat?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-23-a",
          "option_text": "Radiation",
          "is_correct": true
        },
        {
          "id": "core-engineering-23-b",
          "option_text": "Conduction",
          "is_correct": false
        },
        {
          "id": "core-engineering-23-c",
          "option_text": "Convection",
          "is_correct": false
        },
        {
          "id": "core-engineering-23-d",
          "option_text": "Advection",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-24",
      "question_text": "What is the primary constituent of Portland cement responsible for early compressive strength development?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-24-a",
          "option_text": "Tricalcium Silicate (C3S)",
          "is_correct": true
        },
        {
          "id": "core-engineering-24-b",
          "option_text": "Dicalcium Silicate (C2S)",
          "is_correct": false
        },
        {
          "id": "core-engineering-24-c",
          "option_text": "Tricalcium Aluminate (C3A)",
          "is_correct": false
        },
        {
          "id": "core-engineering-24-d",
          "option_text": "Gypsum",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-25",
      "question_text": "In an RLC circuit, what condition occurs when inductive reactance equals capacitive reactance (XL = XC)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-25-a",
          "option_text": "Resonance",
          "is_correct": true
        },
        {
          "id": "core-engineering-25-b",
          "option_text": "Antiresonance",
          "is_correct": false
        },
        {
          "id": "core-engineering-25-c",
          "option_text": "Short Circuit",
          "is_correct": false
        },
        {
          "id": "core-engineering-25-d",
          "option_text": "Open Circuit",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-26",
      "question_text": "Which machine element is used to support rotating shafts while minimizing rotational friction?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-26-a",
          "option_text": "Bearing",
          "is_correct": true
        },
        {
          "id": "core-engineering-26-b",
          "option_text": "Coupling",
          "is_correct": false
        },
        {
          "id": "core-engineering-26-c",
          "option_text": "Keyway",
          "is_correct": false
        },
        {
          "id": "core-engineering-26-d",
          "option_text": "Flywheel",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-27",
      "question_text": "What type of survey instrument measures both horizontal and vertical angles as well as slope distances electronically?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-27-a",
          "option_text": "Total Station",
          "is_correct": true
        },
        {
          "id": "core-engineering-27-b",
          "option_text": "Theodolite",
          "is_correct": false
        },
        {
          "id": "core-engineering-27-c",
          "option_text": "Dumpy Level",
          "is_correct": false
        },
        {
          "id": "core-engineering-27-d",
          "option_text": "Prismatic Compass",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-28",
      "question_text": "What is the operational purpose of an op-amp configured with negative feedback?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-28-a",
          "option_text": "Stabilizing closed-loop gain and broadening bandwidth",
          "is_correct": true
        },
        {
          "id": "core-engineering-28-b",
          "option_text": "Maximizing open-loop saturation",
          "is_correct": false
        },
        {
          "id": "core-engineering-28-c",
          "option_text": "Generating high-frequency carrier oscillations",
          "is_correct": false
        },
        {
          "id": "core-engineering-28-d",
          "option_text": "Eliminating input impedance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-29",
      "question_text": "In a 4-stroke internal combustion engine, during which stroke is mechanical work delivered to the crankshaft?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-29-a",
          "option_text": "Power (Expansion) Stroke",
          "is_correct": true
        },
        {
          "id": "core-engineering-29-b",
          "option_text": "Compression Stroke",
          "is_correct": false
        },
        {
          "id": "core-engineering-29-c",
          "option_text": "Intake Stroke",
          "is_correct": false
        },
        {
          "id": "core-engineering-29-d",
          "option_text": "Exhaust Stroke",
          "is_correct": false
        }
      ]
    },
    {
      "id": "core-engineering-30",
      "question_text": "What does the Reynolds Number in fluid dynamics indicate?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "core-engineering-30-a",
          "option_text": "Ratio of inertial forces to viscous forces",
          "is_correct": true
        },
        {
          "id": "core-engineering-30-b",
          "option_text": "Ratio of buoyant forces to drag forces",
          "is_correct": false
        },
        {
          "id": "core-engineering-30-c",
          "option_text": "Ratio of pressure forces to surface tension",
          "is_correct": false
        },
        {
          "id": "core-engineering-30-d",
          "option_text": "Velocity of sound in the medium",
          "is_correct": false
        }
      ]
    }
  ],
  "business-management": [
    {
      "id": "business-management-1",
      "question_text": "Which marketing framework encompasses Product, Price, Place, and Promotion?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-1-a",
          "option_text": "The 4 Ps of Marketing Mix",
          "is_correct": true
        },
        {
          "id": "business-management-1-b",
          "option_text": "Porter's Five Forces",
          "is_correct": false
        },
        {
          "id": "business-management-1-c",
          "option_text": "SWOT Analysis",
          "is_correct": false
        },
        {
          "id": "business-management-1-d",
          "option_text": "BCG Matrix",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-2",
      "question_text": "In corporate finance, what does EBITDA stand for?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-2-a",
          "option_text": "Earnings Before Interest, Taxes, Depreciation, and Amortization",
          "is_correct": true
        },
        {
          "id": "business-management-2-b",
          "option_text": "Equity Before Investment, Trading, Debt, and Assets",
          "is_correct": false
        },
        {
          "id": "business-management-2-c",
          "option_text": "Estimated Balance of International Trade, Debt, and Accounts",
          "is_correct": false
        },
        {
          "id": "business-management-2-d",
          "option_text": "Earnings Behind Insurance, Taxes, Dividends, and Assets",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-3",
      "question_text": "What financial statement provides a snapshot of a company's assets, liabilities, and shareholders' equity at a specific point in time?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-3-a",
          "option_text": "Balance Sheet",
          "is_correct": true
        },
        {
          "id": "business-management-3-b",
          "option_text": "Income Statement",
          "is_correct": false
        },
        {
          "id": "business-management-3-c",
          "option_text": "Cash Flow Statement",
          "is_correct": false
        },
        {
          "id": "business-management-3-d",
          "option_text": "Statement of Retained Earnings",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-4",
      "question_text": "In strategic management, which tool analyzes internal Strengths and Weaknesses alongside external Opportunities and Threats?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-4-a",
          "option_text": "SWOT Analysis",
          "is_correct": true
        },
        {
          "id": "business-management-4-b",
          "option_text": "PESTEL Analysis",
          "is_correct": false
        },
        {
          "id": "business-management-4-c",
          "option_text": "Ansoff Matrix",
          "is_correct": false
        },
        {
          "id": "business-management-4-d",
          "option_text": "Value Chain Analysis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-5",
      "question_text": "What metric measures the total revenue a business can reasonably expect from a single customer account throughout their relationship?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-5-a",
          "option_text": "Customer Lifetime Value (CLV / LTV)",
          "is_correct": true
        },
        {
          "id": "business-management-5-b",
          "option_text": "Customer Acquisition Cost (CAC)",
          "is_correct": false
        },
        {
          "id": "business-management-5-c",
          "option_text": "Net Promoter Score (NPS)",
          "is_correct": false
        },
        {
          "id": "business-management-5-d",
          "option_text": "Return on Equity (ROE)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-6",
      "question_text": "Which inventory management strategy seeks to receive goods only as they are needed in the production process, minimizing holding costs?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-6-a",
          "option_text": "Just-In-Time (JIT)",
          "is_correct": true
        },
        {
          "id": "business-management-6-b",
          "option_text": "Economic Order Quantity (EOQ)",
          "is_correct": false
        },
        {
          "id": "business-management-6-c",
          "option_text": "First-In-First-Out (FIFO)",
          "is_correct": false
        },
        {
          "id": "business-management-6-d",
          "option_text": "Safety Stock Buffer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-7",
      "question_text": "In Agile project management, what is a fixed-duration iteration (usually 1–4 weeks) called where a team delivers completed work?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-7-a",
          "option_text": "Sprint",
          "is_correct": true
        },
        {
          "id": "business-management-7-b",
          "option_text": "Kanban Queue",
          "is_correct": false
        },
        {
          "id": "business-management-7-c",
          "option_text": "Milestone",
          "is_correct": false
        },
        {
          "id": "business-management-7-d",
          "option_text": "Backlog Grooming",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-8",
      "question_text": "What metric measures the percentage of customers who stop using a company's product or service during a given timeframe?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-8-a",
          "option_text": "Churn Rate",
          "is_correct": true
        },
        {
          "id": "business-management-8-b",
          "option_text": "Bounce Rate",
          "is_correct": false
        },
        {
          "id": "business-management-8-c",
          "option_text": "Conversion Rate",
          "is_correct": false
        },
        {
          "id": "business-management-8-d",
          "option_text": "Retention Index",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-9",
      "question_text": "In the BCG Growth-Share Matrix, what are high market share business units in a slow-growing mature industry termed?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-9-a",
          "option_text": "Cash Cows",
          "is_correct": true
        },
        {
          "id": "business-management-9-b",
          "option_text": "Stars",
          "is_correct": false
        },
        {
          "id": "business-management-9-c",
          "option_text": "Question Marks",
          "is_correct": false
        },
        {
          "id": "business-management-9-d",
          "option_text": "Dogs",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-10",
      "question_text": "What accounting principle requires expenses to be recognized in the same period as the revenues they helped generate?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "business-management-10-a",
          "option_text": "Matching Principle",
          "is_correct": true
        },
        {
          "id": "business-management-10-b",
          "option_text": "Conservatism Principle",
          "is_correct": false
        },
        {
          "id": "business-management-10-c",
          "option_text": "Cost Principle",
          "is_correct": false
        },
        {
          "id": "business-management-10-d",
          "option_text": "Materiality Principle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-11",
      "question_text": "What does ROI stand for in performance evaluation?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-11-a",
          "option_text": "Return on Investment",
          "is_correct": true
        },
        {
          "id": "business-management-11-b",
          "option_text": "Rate of Inflation",
          "is_correct": false
        },
        {
          "id": "business-management-11-c",
          "option_text": "Receipt of Income",
          "is_correct": false
        },
        {
          "id": "business-management-11-d",
          "option_text": "Reserve on Inventory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-12",
      "question_text": "In digital marketing, what does CPC represent in pay-per-click advertising campaigns?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-12-a",
          "option_text": "Cost Per Click",
          "is_correct": true
        },
        {
          "id": "business-management-12-b",
          "option_text": "Cost Per Customer",
          "is_correct": false
        },
        {
          "id": "business-management-12-c",
          "option_text": "Clicks Per Conversion",
          "is_correct": false
        },
        {
          "id": "business-management-12-d",
          "option_text": "Click Passing Channel",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-13",
      "question_text": "What is the primary goal of Human Resource Management (HRM) during the onboarding phase?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-13-a",
          "option_text": "Integrating new employees smoothly into company culture, tools, and job roles",
          "is_correct": true
        },
        {
          "id": "business-management-13-b",
          "option_text": "Conducting annual salary appraisals",
          "is_correct": false
        },
        {
          "id": "business-management-13-c",
          "option_text": "Managing legal termination procedures",
          "is_correct": false
        },
        {
          "id": "business-management-13-d",
          "option_text": "Auditing employee tax filings",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-14",
      "question_text": "Which financial ratio divides Current Assets by Current Liabilities to measure short-term liquidity?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-14-a",
          "option_text": "Current Ratio",
          "is_correct": true
        },
        {
          "id": "business-management-14-b",
          "option_text": "Debt-to-Equity Ratio",
          "is_correct": false
        },
        {
          "id": "business-management-14-c",
          "option_text": "Quick Acid-Test Ratio",
          "is_correct": false
        },
        {
          "id": "business-management-14-d",
          "option_text": "Gross Profit Margin",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-15",
      "question_text": "What does SEO stand for in modern inbound growth marketing?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-15-a",
          "option_text": "Search Engine Optimization",
          "is_correct": true
        },
        {
          "id": "business-management-15-b",
          "option_text": "Social Engagement Operations",
          "is_correct": false
        },
        {
          "id": "business-management-15-c",
          "option_text": "Sales Enterprise Outreach",
          "is_correct": false
        },
        {
          "id": "business-management-15-d",
          "option_text": "Structured Email Overview",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-16",
      "question_text": "Which competitive strategy identifies a firm aiming to become the lowest-cost producer in its industry?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-16-a",
          "option_text": "Cost Leadership Strategy",
          "is_correct": true
        },
        {
          "id": "business-management-16-b",
          "option_text": "Differentiation Strategy",
          "is_correct": false
        },
        {
          "id": "business-management-16-c",
          "option_text": "Focus Strategy",
          "is_correct": false
        },
        {
          "id": "business-management-16-d",
          "option_text": "Diversification Strategy",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-17",
      "question_text": "What type of B2B sales model involves selling software hosted on cloud servers and accessed via recurring subscriptions?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-17-a",
          "option_text": "Software as a Service (SaaS)",
          "is_correct": true
        },
        {
          "id": "business-management-17-b",
          "option_text": "On-Premise Licensing",
          "is_correct": false
        },
        {
          "id": "business-management-17-c",
          "option_text": "Perpetual Commercial Distribution",
          "is_correct": false
        },
        {
          "id": "business-management-17-d",
          "option_text": "Open Source Hardware",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-18",
      "question_text": "In operations research, what is the path through a project network with zero slack time that determines total project duration?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-18-a",
          "option_text": "Critical Path",
          "is_correct": true
        },
        {
          "id": "business-management-18-b",
          "option_text": "Fast-Track Path",
          "is_correct": false
        },
        {
          "id": "business-management-18-c",
          "option_text": "Slack Route",
          "is_correct": false
        },
        {
          "id": "business-management-18-d",
          "option_text": "Buffer Chain",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-19",
      "question_text": "What KPI measures customer loyalty by asking how likely they are to recommend a company to a friend or colleague?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-19-a",
          "option_text": "Net Promoter Score (NPS)",
          "is_correct": true
        },
        {
          "id": "business-management-19-b",
          "option_text": "Customer Satisfaction Score (CSAT)",
          "is_correct": false
        },
        {
          "id": "business-management-19-c",
          "option_text": "Customer Effort Score (CES)",
          "is_correct": false
        },
        {
          "id": "business-management-19-d",
          "option_text": "System Usability Scale (SUS)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-20",
      "question_text": "What is the point in volume sales where total revenue equals total fixed and variable costs?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "business-management-20-a",
          "option_text": "Break-even Point",
          "is_correct": true
        },
        {
          "id": "business-management-20-b",
          "option_text": "Operating Margin Point",
          "is_correct": false
        },
        {
          "id": "business-management-20-c",
          "option_text": "Contribution Plateau",
          "is_correct": false
        },
        {
          "id": "business-management-20-d",
          "option_text": "Profit Maximization Point",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-21",
      "question_text": "What is the formula for Gross Profit?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-21-a",
          "option_text": "Revenue - Cost of Goods Sold (COGS)",
          "is_correct": true
        },
        {
          "id": "business-management-21-b",
          "option_text": "Revenue - Operating Expenses",
          "is_correct": false
        },
        {
          "id": "business-management-21-c",
          "option_text": "Net Income - Taxes",
          "is_correct": false
        },
        {
          "id": "business-management-21-d",
          "option_text": "Operating Income + Dividends",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-22",
      "question_text": "In supply chain management, what phenomenon describes how small fluctuations in consumer demand amplify as they move up the supply chain?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-22-a",
          "option_text": "Bullwhip Effect",
          "is_correct": true
        },
        {
          "id": "business-management-22-b",
          "option_text": "Hawthorne Effect",
          "is_correct": false
        },
        {
          "id": "business-management-22-c",
          "option_text": "Pareto Principle",
          "is_correct": false
        },
        {
          "id": "business-management-22-d",
          "option_text": "Halo Effect",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-23",
      "question_text": "Which leadership style empowers team members with high autonomy and minimal direct oversight?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-23-a",
          "option_text": "Laissez-Faire Leadership",
          "is_correct": true
        },
        {
          "id": "business-management-23-b",
          "option_text": "Autocratic Leadership",
          "is_correct": false
        },
        {
          "id": "business-management-23-c",
          "option_text": "Bureaucratic Leadership",
          "is_correct": false
        },
        {
          "id": "business-management-23-d",
          "option_text": "Transactional Leadership",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-24",
      "question_text": "In financial markets, what does IPO stand for?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-24-a",
          "option_text": "Initial Public Offering",
          "is_correct": true
        },
        {
          "id": "business-management-24-b",
          "option_text": "International Portfolio Order",
          "is_correct": false
        },
        {
          "id": "business-management-24-c",
          "option_text": "Internal Profit Organization",
          "is_correct": false
        },
        {
          "id": "business-management-24-d",
          "option_text": "Index Price Optimization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-25",
      "question_text": "What does the 80/20 rule (Pareto Principle) assert in business productivity?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-25-a",
          "option_text": "80% of outcomes result from 20% of causes or inputs",
          "is_correct": true
        },
        {
          "id": "business-management-25-b",
          "option_text": "80% of budget must be allocated to marketing",
          "is_correct": false
        },
        {
          "id": "business-management-25-c",
          "option_text": "20% of staff should manage 80% of projects",
          "is_correct": false
        },
        {
          "id": "business-management-25-d",
          "option_text": "Profits must grow by 20% over 80 business days",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-26",
      "question_text": "What term describes the strategic buying and selling of foreign currencies to facilitate international trade or profit from exchange rate shifts?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-26-a",
          "option_text": "Foreign Exchange (Forex) Trading",
          "is_correct": true
        },
        {
          "id": "business-management-26-b",
          "option_text": "Securities Underwriting",
          "is_correct": false
        },
        {
          "id": "business-management-26-c",
          "option_text": "Venture Capital Financing",
          "is_correct": false
        },
        {
          "id": "business-management-26-d",
          "option_text": "Factoring Accounts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-27",
      "question_text": "In performance management, what does the acronym SMART stand for when defining project objectives?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-27-a",
          "option_text": "Specific, Measurable, Achievable, Relevant, Time-bound",
          "is_correct": true
        },
        {
          "id": "business-management-27-b",
          "option_text": "Strategic, Marketable, Authorized, Rapid, Targeted",
          "is_correct": false
        },
        {
          "id": "business-management-27-c",
          "option_text": "Systematic, Modular, Accountable, Robust, Tested",
          "is_correct": false
        },
        {
          "id": "business-management-27-d",
          "option_text": "Standardized, Monitored, Accurate, Reviewed, Tracked",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-28",
      "question_text": "What is working capital defined as?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-28-a",
          "option_text": "Current Assets - Current Liabilities",
          "is_correct": true
        },
        {
          "id": "business-management-28-b",
          "option_text": "Total Assets - Total Debt",
          "is_correct": false
        },
        {
          "id": "business-management-28-c",
          "option_text": "Cash at Bank + Fixed Assets",
          "is_correct": false
        },
        {
          "id": "business-management-28-d",
          "option_text": "Net Profit - Depreciation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-29",
      "question_text": "Which pricing strategy involves setting high initial prices when launching an innovative product and gradually lowering prices over time?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-29-a",
          "option_text": "Price Skimming",
          "is_correct": true
        },
        {
          "id": "business-management-29-b",
          "option_text": "Penetration Pricing",
          "is_correct": false
        },
        {
          "id": "business-management-29-c",
          "option_text": "Cost-Plus Pricing",
          "is_correct": false
        },
        {
          "id": "business-management-29-d",
          "option_text": "Freemium Pricing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "business-management-30",
      "question_text": "In organizational design, what does 'Span of Control' refer to?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "business-management-30-a",
          "option_text": "The number of direct subordinates a manager supervises",
          "is_correct": true
        },
        {
          "id": "business-management-30-b",
          "option_text": "The geographical reach of sales branches",
          "is_correct": false
        },
        {
          "id": "business-management-30-c",
          "option_text": "The maximum budget allocated to an executive",
          "is_correct": false
        },
        {
          "id": "business-management-30-d",
          "option_text": "The duration of board member tenures",
          "is_correct": false
        }
      ]
    }
  ],
  "ui-ux-design": [
    {
      "id": "ui-ux-design-1",
      "question_text": "In digital product design, what does 'UI' stand for?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-1-a",
          "option_text": "User Interface",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-1-b",
          "option_text": "User Interaction",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-1-c",
          "option_text": "Unified Integration",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-1-d",
          "option_text": "Universal Identity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-2",
      "question_text": "In User Experience (UX) methodology, what is a fictional representation of an ideal target customer based on research data called?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-2-a",
          "option_text": "User Persona",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-2-b",
          "option_text": "Wireframe",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-2-c",
          "option_text": "Storyboard",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-2-d",
          "option_text": "Customer Empathy Map",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-3",
      "question_text": "According to WCAG (Web Content Accessibility Guidelines), what is the minimum contrast ratio required for normal body text at AA level?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-3-a",
          "option_text": "4.5:1",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-3-b",
          "option_text": "3.0:1",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-3-c",
          "option_text": "7.0:1",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-3-d",
          "option_text": "2.0:1",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-4",
      "question_text": "In Figma, what feature dynamically resizes container frames and elements according to their content and layout rules?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-4-a",
          "option_text": "Auto Layout",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-4-b",
          "option_text": "Smart Animate",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-4-c",
          "option_text": "Boolean Groups",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-4-d",
          "option_text": "Interactive Overlays",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-5",
      "question_text": "What psychological law predicts that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-5-a",
          "option_text": "Fitts's Law",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-5-b",
          "option_text": "Hick's Law",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-5-c",
          "option_text": "Miller's Law",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-5-d",
          "option_text": "Jakob's Law",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-6",
      "question_text": "What does Hick's Law state in interaction design?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-6-a",
          "option_text": "The time it takes to make a decision increases with the number and complexity of choices",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-6-b",
          "option_text": "Users spend most of their time on other sites",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-6-c",
          "option_text": "Human working memory can hold only 7 plus-or-minus 2 items",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-6-d",
          "option_text": "Objects near each other tend to be grouped together",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-7",
      "question_text": "In product discovery, what is a low-fidelity, basic structural outline of a screen layout called?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-7-a",
          "option_text": "Wireframe",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-7-b",
          "option_text": "High-fidelity Prototype",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-7-c",
          "option_text": "Design System",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-7-d",
          "option_text": "Pixel-perfect Mockup",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-8",
      "question_text": "Which Gestalt Principle explains why visual elements enclosed within a boundary or sharing a common background are perceived as a group?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-8-a",
          "option_text": "Law of Common Region",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-8-b",
          "option_text": "Law of Similarity",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-8-c",
          "option_text": "Law of Closure",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-8-d",
          "option_text": "Law of Continuity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-9",
      "question_text": "What is an A/B Test in product optimization?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-9-a",
          "option_text": "Comparing two versions of a webpage or feature against each other to determine which performs better with real users",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-9-b",
          "option_text": "Testing software on Apple vs Android devices",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-9-c",
          "option_text": "Evaluating backend load vs database queries",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-9-d",
          "option_text": "Auditing source code for security vulnerabilities",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-10",
      "question_text": "What does 'Information Architecture' (IA) primarily focus on?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-10-a",
          "option_text": "Organizing, structuring, and labeling content effectively so users can easily find information",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-10-b",
          "option_text": "Writing automated frontend unit tests",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-10-c",
          "option_text": "Selecting brand typography font pairings",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-10-d",
          "option_text": "Configuring web hosting servers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-11",
      "question_text": "In typographic hierarchy, what is the vertical space between lines of text termed?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-11-a",
          "option_text": "Line Height (Leading)",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-11-b",
          "option_text": "Kerning",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-11-c",
          "option_text": "Tracking",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-11-d",
          "option_text": "Baseline Offset",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-12",
      "question_text": "What is an affordance in design?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-12-a",
          "option_text": "A property or clue in an object that indicates how it can be used or interacted with",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-12-b",
          "option_text": "The financial cost of purchasing a software license",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-12-c",
          "option_text": "The speed at which a CSS animation executes",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-12-d",
          "option_text": "The resolution of a vector SVG file",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-13",
      "question_text": "Which UX research method involves asking participants to organize topic cards into categories that make logical sense to them?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-13-a",
          "option_text": "Card Sorting",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-13-b",
          "option_text": "Tree Testing",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-13-c",
          "option_text": "Heuristic Evaluation",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-13-d",
          "option_text": "Eye Tracking",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-14",
      "question_text": "What design tool feature allows reusable master UI components that propagate changes across an entire design system?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-14-a",
          "option_text": "Components / Master Instances",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-14-b",
          "option_text": "Layer Clipping Masks",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-14-c",
          "option_text": "Vector Paths",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-14-d",
          "option_text": "Bitmap Export",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-15",
      "question_text": "According to Jakob's Law of Internet User Experience, where do users spend most of their time?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-15-a",
          "option_text": "On other websites, meaning they prefer your site to work like all the other sites they already know",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-15-b",
          "option_text": "On social media platforms exclusively",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-15-c",
          "option_text": "On search engine result pages only",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-15-d",
          "option_text": "Navigating hamburger drawer menus",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-16",
      "question_text": "What usability evaluation method has expert evaluators inspect a product interface against recognized usability principles?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-16-a",
          "option_text": "Heuristic Evaluation (Nielsen's Heuristics)",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-16-b",
          "option_text": "Guerilla Intercept Testing",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-16-c",
          "option_text": "Cognitive Walkthrough with raw telemetry",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-16-d",
          "option_text": "Synthetic Eye-Tracking heatmap",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-17",
      "question_text": "What is a 'Breadcrumb' navigation element in website UX?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-17-a",
          "option_text": "A secondary navigation trail showing the user's location within the site hierarchy",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-17-b",
          "option_text": "A cookie stored in the user's browser",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-17-c",
          "option_text": "A temporary notification toast banner",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-17-d",
          "option_text": "A floating action button in mobile layouts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-18",
      "question_text": "In responsive web design, what are the viewport width thresholds called where the layout rearranges for different screen sizes?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-18-a",
          "option_text": "Breakpoints",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-18-b",
          "option_text": "Aspect Ratios",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-18-c",
          "option_text": "Safe Areas",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-18-d",
          "option_text": "Grid Margins",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-19",
      "question_text": "What is 'White Space' (Negative Space) in visual design?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-19-a",
          "option_text": "The unmarked space between design elements, typography, and margins that gives content breathing room",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-19-b",
          "option_text": "Areas colored strictly with hex code #FFFFFF",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-19-c",
          "option_text": "Unused dead zones that must be filled with advertisements",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-19-d",
          "option_text": "The canvas border outside an artboard",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-20",
      "question_text": "What is a Design System primarily composed of?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-20-a",
          "option_text": "Reusable UI components, design tokens, style guidelines, and code documentation",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-20-b",
          "option_text": "A collection of stock photography only",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-20-c",
          "option_text": "A Photoshop layer archive",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-20-d",
          "option_text": "A repository of frontend test scripts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-21",
      "question_text": "Which color model is universally used for digital screen display interfaces?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-21-a",
          "option_text": "RGB (Red, Green, Blue)",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-21-b",
          "option_text": "CMYK (Cyan, Magenta, Yellow, Key Black)",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-21-c",
          "option_text": "Pantone PMS",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-21-d",
          "option_text": "RAL Color Standard",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-22",
      "question_text": "What is a 'Call to Action' (CTA) button in digital interface design?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-22-a",
          "option_text": "A prominent interactive element designed to prompt an immediate response from the user",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-22-b",
          "option_text": "An audio trigger that rings customer support",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-22-c",
          "option_text": "A disclaimer modal link for privacy terms",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-22-d",
          "option_text": "A subtle back button in the top navigation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-23",
      "question_text": "What does 'Skeuomorphism' describe in interface design history?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-23-a",
          "option_text": "Designing digital UI elements to mimic real-world physical objects and realistic textures",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-23-b",
          "option_text": "Using flat minimalist neon gradients",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-23-c",
          "option_text": "Adopting brutalist raw monochrome layouts",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-23-d",
          "option_text": "Using high-contrast dark mode palettes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-24",
      "question_text": "What metric tracks the percentage of users who complete a desired goal (such as signing up or purchasing)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-24-a",
          "option_text": "Conversion Rate",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-24-b",
          "option_text": "Click-Through Rate (CTR)",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-24-c",
          "option_text": "Drop-off Ratio",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-24-d",
          "option_text": "Task Completion Time",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-25",
      "question_text": "What research technique asks users to vocalize their thoughts, questions, and reactions out loud while completing a task?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-25-a",
          "option_text": "Think-Aloud Protocol",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-25-b",
          "option_text": "Silent Observation Method",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-25-c",
          "option_text": "Closed Survey Polling",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-25-d",
          "option_text": "Retrospective Post-Mortem",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-26",
      "question_text": "What does a 'User Journey Map' visualize?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-26-a",
          "option_text": "The chronological sequence of steps, touchpoints, and emotions a user experiences while achieving a goal",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-26-b",
          "option_text": "The geographic locations of website visitors on a map",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-26-c",
          "option_text": "The database network topology between cloud regions",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-26-d",
          "option_text": "The sprint velocity of engineering iterations",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-27",
      "question_text": "In mobile navigation, what is a modal interface element that slides up from the bottom of the screen called?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-27-a",
          "option_text": "Bottom Sheet",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-27-b",
          "option_text": "Floating Action Button",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-27-c",
          "option_text": "Notification Badge",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-27-d",
          "option_text": "Tooltip Popover",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-28",
      "question_text": "What is 'Microcopy' in UX writing?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-28-a",
          "option_text": "Small, targeted pieces of contextual text (like button labels, helper text, and error messages) that guide users",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-28-b",
          "option_text": "Copyright legal terms in footer links",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-28-c",
          "option_text": "Compressed minified JavaScript strings",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-28-d",
          "option_text": "Font sizes smaller than 10 pixels",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-29",
      "question_text": "What is a 'Dark Pattern' in user interface design?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-29-a",
          "option_text": "A deceptive user interface crafted to trick users into taking actions they might not otherwise choose",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-29-b",
          "option_text": "A stylish high-contrast dark theme mode",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-29-c",
          "option_text": "An interface with missing color contrast",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-29-d",
          "option_text": "A wireframe drawn on a dark slate canvas",
          "is_correct": false
        }
      ]
    },
    {
      "id": "ui-ux-design-30",
      "question_text": "What is the primary benefit of conducting Moderated Usability Testing?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "ui-ux-design-30-a",
          "option_text": "The facilitator can probe deeper, ask follow-up questions, and understand the user's reasoning in real-time",
          "is_correct": true
        },
        {
          "id": "ui-ux-design-30-b",
          "option_text": "It requires zero human intervention or analysis",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-30-c",
          "option_text": "It can test millions of users simultaneously in seconds",
          "is_correct": false
        },
        {
          "id": "ui-ux-design-30-d",
          "option_text": "It completely replaces quantitative analytical dashboards",
          "is_correct": false
        }
      ]
    }
  ],
  "cpp": [
    {
      "id": "cpp-1",
      "question_text": "Which operator is used in C++ to dynamically allocate memory on the heap?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-1-a",
          "option_text": "new",
          "is_correct": true
        },
        {
          "id": "cpp-1-b",
          "option_text": "malloc",
          "is_correct": false
        },
        {
          "id": "cpp-1-c",
          "option_text": "alloc",
          "is_correct": false
        },
        {
          "id": "cpp-1-d",
          "option_text": "create",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-2",
      "question_text": "What is the size of a standard char in C / C++?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-2-a",
          "option_text": "1 byte",
          "is_correct": true
        },
        {
          "id": "cpp-2-b",
          "option_text": "2 bytes",
          "is_correct": false
        },
        {
          "id": "cpp-2-c",
          "option_text": "4 bytes",
          "is_correct": false
        },
        {
          "id": "cpp-2-d",
          "option_text": "8 bytes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-3",
      "question_text": "What feature allows C++ functions or classes to work with generic data types without rewriting code for each type?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-3-a",
          "option_text": "Templates",
          "is_correct": true
        },
        {
          "id": "cpp-3-b",
          "option_text": "Macros",
          "is_correct": false
        },
        {
          "id": "cpp-3-c",
          "option_text": "Inheritance",
          "is_correct": false
        },
        {
          "id": "cpp-3-d",
          "option_text": "Pointers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-4",
      "question_text": "What principle in C++ ensures resource deallocation occurs automatically during stack unwinding via object destructors?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-4-a",
          "option_text": "RAII (Resource Acquisition Is Initialization)",
          "is_correct": true
        },
        {
          "id": "cpp-4-b",
          "option_text": "DRY (Don't Repeat Yourself)",
          "is_correct": false
        },
        {
          "id": "cpp-4-c",
          "option_text": "KISS Principle",
          "is_correct": false
        },
        {
          "id": "cpp-4-d",
          "option_text": "Polymorphic Binding",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-5",
      "question_text": "What is a pointer that holds the memory address of an object that has already been deallocated called?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-5-a",
          "option_text": "Dangling Pointer",
          "is_correct": true
        },
        {
          "id": "cpp-5-b",
          "option_text": "Null Pointer",
          "is_correct": false
        },
        {
          "id": "cpp-5-c",
          "option_text": "Void Pointer",
          "is_correct": false
        },
        {
          "id": "cpp-5-d",
          "option_text": "Wild Pointer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-6",
      "question_text": "Which keyword in C++ makes a member function eligible for dynamic polymorphism and runtime method overriding?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-6-a",
          "option_text": "virtual",
          "is_correct": true
        },
        {
          "id": "cpp-6-b",
          "option_text": "override",
          "is_correct": false
        },
        {
          "id": "cpp-6-c",
          "option_text": "dynamic",
          "is_correct": false
        },
        {
          "id": "cpp-6-d",
          "option_text": "polymorphic",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-7",
      "question_text": "In C++, which smart pointer allows shared ownership of a heap resource through reference counting?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-7-a",
          "option_text": "std::shared_ptr",
          "is_correct": true
        },
        {
          "id": "cpp-7-b",
          "option_text": "std::unique_ptr",
          "is_correct": false
        },
        {
          "id": "cpp-7-c",
          "option_text": "std::weak_ptr",
          "is_correct": false
        },
        {
          "id": "cpp-7-d",
          "option_text": "std::auto_ptr",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-8",
      "question_text": "What is the standard stream used for standard output in C++?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-8-a",
          "option_text": "std::cout",
          "is_correct": true
        },
        {
          "id": "cpp-8-b",
          "option_text": "std::cin",
          "is_correct": false
        },
        {
          "id": "cpp-8-c",
          "option_text": "std::cerr",
          "is_correct": false
        },
        {
          "id": "cpp-8-d",
          "option_text": "printf()",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-9",
      "question_text": "What does the 'const' keyword applied to a C++ member function indicate (e.g. int getVal() const)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-9-a",
          "option_text": "The function promises not to modify any member variables of the calling object",
          "is_correct": true
        },
        {
          "id": "cpp-9-b",
          "option_text": "The function cannot return a constant value",
          "is_correct": false
        },
        {
          "id": "cpp-9-c",
          "option_text": "The function can only be called once",
          "is_correct": false
        },
        {
          "id": "cpp-9-d",
          "option_text": "The function cannot accept input parameters",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-10",
      "question_text": "What is the result of sizeof(int*) on a standard 64-bit operating system?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "cpp-10-a",
          "option_text": "8 bytes",
          "is_correct": true
        },
        {
          "id": "cpp-10-b",
          "option_text": "4 bytes",
          "is_correct": false
        },
        {
          "id": "cpp-10-c",
          "option_text": "16 bytes",
          "is_correct": false
        },
        {
          "id": "cpp-10-d",
          "option_text": "2 bytes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-11",
      "question_text": "What header file must be included in C++ to use dynamic resizable vectors?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-11-a",
          "option_text": "<vector>",
          "is_correct": true
        },
        {
          "id": "cpp-11-b",
          "option_text": "<array>",
          "is_correct": false
        },
        {
          "id": "cpp-11-c",
          "option_text": "<list>",
          "is_correct": false
        },
        {
          "id": "cpp-11-d",
          "option_text": "<algorithm>",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-12",
      "question_text": "Which access specifier in C++ makes class members accessible only within the class itself and by derived classes?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-12-a",
          "option_text": "protected",
          "is_correct": true
        },
        {
          "id": "cpp-12-b",
          "option_text": "private",
          "is_correct": false
        },
        {
          "id": "cpp-12-c",
          "option_text": "public",
          "is_correct": false
        },
        {
          "id": "cpp-12-d",
          "option_text": "internal",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-13",
      "question_text": "In C++, what is a class called that has at least one pure virtual function (e.g. virtual void fn() = 0;)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-13-a",
          "option_text": "Abstract Class",
          "is_correct": true
        },
        {
          "id": "cpp-13-b",
          "option_text": "Interface Singleton",
          "is_correct": false
        },
        {
          "id": "cpp-13-c",
          "option_text": "Concrete Class",
          "is_correct": false
        },
        {
          "id": "cpp-13-d",
          "option_text": "Static Class",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-14",
      "question_text": "What does the 'friend' keyword in C++ grant to an external function or class?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-14-a",
          "option_text": "Access to private and protected members of the class declaring the friendship",
          "is_correct": true
        },
        {
          "id": "cpp-14-b",
          "option_text": "Inheritance of all public methods",
          "is_correct": false
        },
        {
          "id": "cpp-14-c",
          "option_text": "Ability to override const qualifiers",
          "is_correct": false
        },
        {
          "id": "cpp-14-d",
          "option_text": "Automatic dynamic memory cleanup",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-15",
      "question_text": "What is the difference between a pointer and a reference in C++?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-15-a",
          "option_text": "A reference cannot be null and cannot be reseated to refer to another object after initialization",
          "is_correct": true
        },
        {
          "id": "cpp-15-b",
          "option_text": "A pointer cannot be re-assigned once initialized",
          "is_correct": false
        },
        {
          "id": "cpp-15-c",
          "option_text": "A reference can hold a null address",
          "is_correct": false
        },
        {
          "id": "cpp-15-d",
          "option_text": "Pointers do not occupy any memory addresses",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-16",
      "question_text": "Which STL container in C++ is implemented as a doubly linked list?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-16-a",
          "option_text": "std::list",
          "is_correct": true
        },
        {
          "id": "cpp-16-b",
          "option_text": "std::vector",
          "is_correct": false
        },
        {
          "id": "cpp-16-c",
          "option_text": "std::deque",
          "is_correct": false
        },
        {
          "id": "cpp-16-d",
          "option_text": "std::forward_list",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-17",
      "question_text": "In C++, what operator is overloaded to enable stream output with std::cout << obj?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-17-a",
          "option_text": "<< (Insertion Operator)",
          "is_correct": true
        },
        {
          "id": "cpp-17-b",
          "option_text": ">> (Extraction Operator)",
          "is_correct": false
        },
        {
          "id": "cpp-17-c",
          "option_text": "+ (Addition Operator)",
          "is_correct": false
        },
        {
          "id": "cpp-17-d",
          "option_text": "-> (Member Access Operator)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-18",
      "question_text": "What is undefined behavior in C / C++?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-18-a",
          "option_text": "Execution behavior for which the language standard imposes no requirements, leading to unpredictable crashes or bugs",
          "is_correct": true
        },
        {
          "id": "cpp-18-b",
          "option_text": "A compiler error that prevents binary generation",
          "is_correct": false
        },
        {
          "id": "cpp-18-c",
          "option_text": "A syntax error detected by static linters",
          "is_correct": false
        },
        {
          "id": "cpp-18-d",
          "option_text": "A standard floating point exception",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-19",
      "question_text": "What does the 'inline' keyword suggest to the C++ compiler?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-19-a",
          "option_text": "Substitute the function code directly at the call site to eliminate function call overhead",
          "is_correct": true
        },
        {
          "id": "cpp-19-b",
          "option_text": "Execute the function in a dedicated thread",
          "is_correct": false
        },
        {
          "id": "cpp-19-c",
          "option_text": "Store the function in CPU registers only",
          "is_correct": false
        },
        {
          "id": "cpp-19-d",
          "option_text": "Prevent the function from being optimized",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-20",
      "question_text": "Which header file provides standard algorithms like std::sort, std::find, and std::binary_search in C++?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "cpp-20-a",
          "option_text": "<algorithm>",
          "is_correct": true
        },
        {
          "id": "cpp-20-b",
          "option_text": "<numeric>",
          "is_correct": false
        },
        {
          "id": "cpp-20-c",
          "option_text": "<functional>",
          "is_correct": false
        },
        {
          "id": "cpp-20-d",
          "option_text": "<utility>",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-21",
      "question_text": "What is the time complexity of searching for an element in an std::map (implemented as a Red-Black Tree)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-21-a",
          "option_text": "O(log n)",
          "is_correct": true
        },
        {
          "id": "cpp-21-b",
          "option_text": "O(1)",
          "is_correct": false
        },
        {
          "id": "cpp-21-c",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "cpp-21-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-22",
      "question_text": "What is the average time complexity of finding an element in an std::unordered_map (implemented as a Hash Table)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-22-a",
          "option_text": "O(1)",
          "is_correct": true
        },
        {
          "id": "cpp-22-b",
          "option_text": "O(log n)",
          "is_correct": false
        },
        {
          "id": "cpp-22-c",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "cpp-22-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-23",
      "question_text": "What does the 'static' keyword on a class member variable in C++ mean?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-23-a",
          "option_text": "A single copy of the variable is shared among all instances of the class",
          "is_correct": true
        },
        {
          "id": "cpp-23-b",
          "option_text": "The variable cannot be read or written to",
          "is_correct": false
        },
        {
          "id": "cpp-23-c",
          "option_text": "The variable is destroyed when the constructor exits",
          "is_correct": false
        },
        {
          "id": "cpp-23-d",
          "option_text": "The variable can only be accessed via pointers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-24",
      "question_text": "Which keyword in modern C++ (C++11+) queries the type of an expression at compile time without evaluating it?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-24-a",
          "option_text": "decltype",
          "is_correct": true
        },
        {
          "id": "cpp-24-b",
          "option_text": "typeof",
          "is_correct": false
        },
        {
          "id": "cpp-24-c",
          "option_text": "typeid",
          "is_correct": false
        },
        {
          "id": "cpp-24-d",
          "option_text": "auto",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-25",
      "question_text": "What is a lambda expression in C++?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-25-a",
          "option_text": "An anonymous, inline function object that can capture variables from its surrounding scope",
          "is_correct": true
        },
        {
          "id": "cpp-25-b",
          "option_text": "A recursive macro definition in preprocessor",
          "is_correct": false
        },
        {
          "id": "cpp-25-c",
          "option_text": "A hardware pointer to an interrupt handler",
          "is_correct": false
        },
        {
          "id": "cpp-25-d",
          "option_text": "A template class specialization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-26",
      "question_text": "What is the Diamond Problem in C++ object-oriented programming?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-26-a",
          "option_text": "Ambiguity arising when a class inherits from two classes that both inherit from the same common base class",
          "is_correct": true
        },
        {
          "id": "cpp-26-b",
          "option_text": "Memory leaks in circular shared_ptr references",
          "is_correct": false
        },
        {
          "id": "cpp-26-c",
          "option_text": "Stack overflow in deeply nested templates",
          "is_correct": false
        },
        {
          "id": "cpp-26-d",
          "option_text": "Buffer overflow when writing past array bounds",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-27",
      "question_text": "How is the Diamond Problem resolved in C++ inheritance hierarchies?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-27-a",
          "option_text": "Virtual Inheritance (e.g. virtual public Base)",
          "is_correct": true
        },
        {
          "id": "cpp-27-b",
          "option_text": "Static Casts",
          "is_correct": false
        },
        {
          "id": "cpp-27-c",
          "option_text": "Declaring all members protected",
          "is_correct": false
        },
        {
          "id": "cpp-27-d",
          "option_text": "Multiple destructors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-28",
      "question_text": "What is the correct way to deallocate an array allocated with new int[50] in C++?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-28-a",
          "option_text": "delete[] ptr;",
          "is_correct": true
        },
        {
          "id": "cpp-28-b",
          "option_text": "delete ptr;",
          "is_correct": false
        },
        {
          "id": "cpp-28-c",
          "option_text": "free(ptr);",
          "is_correct": false
        },
        {
          "id": "cpp-28-d",
          "option_text": "dispose(ptr);",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-29",
      "question_text": "What is the 'Rule of Five' in modern C++ (C++11)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-29-a",
          "option_text": "If you define destructor, copy constructor, or copy assignment, you should also define move constructor and move assignment operator",
          "is_correct": true
        },
        {
          "id": "cpp-29-b",
          "option_text": "A class cannot have more than 5 private member variables",
          "is_correct": false
        },
        {
          "id": "cpp-29-c",
          "option_text": "Every function must have fewer than 5 arguments",
          "is_correct": false
        },
        {
          "id": "cpp-29-d",
          "option_text": "A namespace can contain at most 5 nested sub-namespaces",
          "is_correct": false
        }
      ]
    },
    {
      "id": "cpp-30",
      "question_text": "What does std::move do in C++?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "cpp-30-a",
          "option_text": "It casts an lvalue to an rvalue reference, enabling resource transfer without deep copying",
          "is_correct": true
        },
        {
          "id": "cpp-30-b",
          "option_text": "It moves an object to a new CPU register",
          "is_correct": false
        },
        {
          "id": "cpp-30-c",
          "option_text": "It copies bytes directly from disk to RAM",
          "is_correct": false
        },
        {
          "id": "cpp-30-d",
          "option_text": "It forces thread context switching",
          "is_correct": false
        }
      ]
    }
  ],
  "prompt-engineering": [
    {
      "id": "prompt-engineering-1",
      "question_text": "Which prompting technique provides demonstration examples with desired input-output pairs inside the prompt before the target query?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-1-a",
          "option_text": "Few-Shot Prompting",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-1-b",
          "option_text": "Zero-Shot Prompting",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-1-c",
          "option_text": "Zero-Shot CoT",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-1-d",
          "option_text": "Recursive Self-Refinement",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-2",
      "question_text": "What does the 'Temperature' hyperparameter in Large Language Models (LLMs) primarily control?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-2-a",
          "option_text": "The randomness and creativity of next-token probability distribution",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-2-b",
          "option_text": "The maximum number of tokens in the context window",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-2-c",
          "option_text": "The physical operating temperature of GPU clusters",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-2-d",
          "option_text": "The learning rate during model pre-training",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-3",
      "question_text": "What prompting strategy encourages an LLM to break complex multi-step reasoning down by adding 'Let's think step by step'?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-3-a",
          "option_text": "Chain-of-Thought (CoT) Prompting",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-3-b",
          "option_text": "Directional Stimulus Prompting",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-3-c",
          "option_text": "Generated Knowledge Prompting",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-3-d",
          "option_text": "ReAct Prompting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-4",
      "question_text": "What is the primary objective of Retrieval-Augmented Generation (RAG) in LLM applications?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-4-a",
          "option_text": "Grounding the LLM generation with external dynamic or proprietary knowledge to reduce hallucinations",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-4-b",
          "option_text": "Compressing the neural weights of the transformer architecture",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-4-c",
          "option_text": "Fine-tuning base model weights using supervised datasets",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-4-d",
          "option_text": "Increasing the context window beyond physical GPU memory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-5",
      "question_text": "What vulnerability describes an attacker crafting malicious input to override developer instructions in the system prompt?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-5-a",
          "option_text": "Prompt Injection",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-5-b",
          "option_text": "Cross-Site Scripting (XSS)",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-5-c",
          "option_text": "Buffer Overflow",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-5-d",
          "option_text": "SQL Injection",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-6",
      "question_text": "In the ReAct prompting framework, what two iterative processes does the model alternate between?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-6-a",
          "option_text": "Reasoning traces and task-specific Actions",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-6-b",
          "option_text": "Recursive compiling and Activation pruning",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-6-c",
          "option_text": "Reinforcement learning and Auto-regressive decoding",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-6-d",
          "option_text": "Rule extraction and Attention mask tuning",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-7",
      "question_text": "What is the 'System Prompt' in chat completion API architectures (like OpenAI or Anthropic)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-7-a",
          "option_text": "High-priority instructions defining the model's persona, boundaries, and formatting rules",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-7-b",
          "option_text": "The operating system command line arguments",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-7-c",
          "option_text": "The token budget allocated per user subscription tier",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-7-d",
          "option_text": "A hardware initialization string sent to the GPU",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-8",
      "question_text": "Which parameter restricts token sampling to the smallest set of tokens whose cumulative probability exceeds a threshold p?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-8-a",
          "option_text": "Top-p (Nucleus Sampling)",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-8-b",
          "option_text": "Top-k Sampling",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-8-c",
          "option_text": "Frequency Penalty",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-8-d",
          "option_text": "Presence Penalty",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-9",
      "question_text": "What is an LLM 'hallucination'?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-9-a",
          "option_text": "When a model generates factually incorrect, ungrounded, or nonsensical output with high confidence",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-9-b",
          "option_text": "When a GPU overheats and drops tensor calculations",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-9-c",
          "option_text": "When prompt tokens exceed context window limits",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-9-d",
          "option_text": "When an embedding vector produces negative cosine similarity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-10",
      "question_text": "Which prompting technique explores multiple reasoning paths in parallel and evaluates choices using search algorithms like BFS or DFS?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-10-a",
          "option_text": "Tree of Thoughts (ToT)",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-10-b",
          "option_text": "Chain-of-Thought (CoT)",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-10-c",
          "option_text": "Zero-Shot Prompting",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-10-d",
          "option_text": "Least-to-Most Prompting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-11",
      "question_text": "What technique involves sampling multiple different reasoning paths from an LLM and selecting the most consistent final answer?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-11-a",
          "option_text": "Self-Consistency Prompting",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-11-b",
          "option_text": "Greedy Decoding",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-11-c",
          "option_text": "One-Shot Prompting",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-11-d",
          "option_text": "Speculative Decoding",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-12",
      "question_text": "What is 'In-Context Learning' in modern Large Language Models?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-12-a",
          "option_text": "The model's ability to learn tasks and follow patterns from examples in the prompt without updating weights",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-12-b",
          "option_text": "Updating transformer backpropagation weights at inference time",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-12-c",
          "option_text": "Storing conversations in persistent SQL databases",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-12-d",
          "option_text": "Caching past key-value attention matrices on SSDs",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-13",
      "question_text": "What does the 'Presence Penalty' parameter discourage in LLM generation?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-13-a",
          "option_text": "Repeating topics or words that have already appeared in the generated text",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-13-b",
          "option_text": "Generating responses in languages other than English",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-13-c",
          "option_text": "Using punctuation and special characters",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-13-d",
          "option_text": "Exceeding prompt length limits",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-14",
      "question_text": "What is the 'Lost in the Middle' phenomenon observed in long-context Large Language Models?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-14-a",
          "option_text": "Models tend to recall information at the beginning and end of long prompts better than information in the middle",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-14-b",
          "option_text": "Middle layers of transformer neural networks lose precision during quantization",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-14-c",
          "option_text": "Conversations lose state after exactly 10 prompt turns",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-14-d",
          "option_text": "Vector databases drop middle chunks during similarity search",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-15",
      "question_text": "Which vector similarity metric is most commonly used to measure relevance between prompt embeddings and document chunks in RAG?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-15-a",
          "option_text": "Cosine Similarity",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-15-b",
          "option_text": "Manhattan Distance",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-15-c",
          "option_text": "Hamming Distance",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-15-d",
          "option_text": "Jaccard Index",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-16",
      "question_text": "What is 'Jailbreaking' in the context of AI safety and prompt engineering?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-16-a",
          "option_text": "Bypassing safety guardrails and policy filters to force the model to generate prohibited or harmful content",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-16-b",
          "option_text": "Rooting the server running the LLM container",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-16-c",
          "option_text": "Exporting closed-source model weights to open source formats",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-16-d",
          "option_text": "Fine-tuning an LLM on pirated textbooks",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-17",
      "question_text": "What is the primary role of an 'Evaluation Framework' like Ragas or TruLens in LLM applications?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-17-a",
          "option_text": "Measuring retrieval precision, faithfulness, and answer relevance quantitatively",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-17-b",
          "option_text": "Benchmarking GPU FLOPS and memory bandwidth",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-17-c",
          "option_text": "Transcribing human audio prompts to text",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-17-d",
          "option_text": "Generating vector embeddings for unstructured files",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-18",
      "question_text": "In 'Least-to-Most Prompting', how does the prompt guide the language model?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-18-a",
          "option_text": "By decomposing a complex problem into sub-problems and solving them sequentially, using answers from earlier steps",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-18-b",
          "option_text": "By restricting output to fewer than 10 words",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-18-c",
          "option_text": "By feeding tokens in reverse chronological order",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-18-d",
          "option_text": "By using lowest temperature first and increasing it gradually",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-19",
      "question_text": "What is 'Chunking' in the context of Retrieval-Augmented Generation (RAG)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-19-a",
          "option_text": "Splitting large documents into smaller, semantically coherent passages before generating embeddings",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-19-b",
          "option_text": "Compressing model weights using 4-bit quantization",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-19-c",
          "option_text": "Grouping multiple API requests to save network overhead",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-19-d",
          "option_text": "Removing punctuation from the input prompt",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-20",
      "question_text": "What is 'Negative Prompting' commonly used for in generative image and text models?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-20-a",
          "option_text": "Specifying what the model should explicitly avoid or exclude from the generated output",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-20-b",
          "option_text": "Subtracting embedding vectors to invert model weights",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-20-c",
          "option_text": "Testing the model with insulting user prompts",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-20-d",
          "option_text": "Generating sarcastic and pessimistic responses",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-21",
      "question_text": "Which technique guides an LLM to strictly output valid structured JSON matching a predefined schema?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-21-a",
          "option_text": "Constrained Decoding / JSON Schema Enforcement",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-21-b",
          "option_text": "Unsupervised Fine-Tuning",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-21-c",
          "option_text": "LoRA Adapter training",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-21-d",
          "option_text": "Greedy token sampling",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-22",
      "question_text": "What is a 'Hallucination Guardrail'?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-22-a",
          "option_text": "A verification layer that cross-checks LLM responses against retrieved evidence before returning them to users",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-22-b",
          "option_text": "A physical cooling system for AI inference servers",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-22-c",
          "option_text": "A hardware firewall blocking inbound port 80 traffic",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-22-d",
          "option_text": "A rate limiter capping API requests per minute",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-23",
      "question_text": "In Prompt Engineering, what is 'Role Prompting' (e.g., 'Act as a Senior Cloud Architect')?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-23-a",
          "option_text": "Instructing the model to adopt a specific identity, tone, expertise level, and perspective",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-23-b",
          "option_text": "Assigning IAM roles to API service accounts",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-23-c",
          "option_text": "Switching between human and synthetic user accounts",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-23-d",
          "option_text": "Defining user permissions in a database",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-24",
      "question_text": "What is 'Directional Stimulus Prompting'?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-24-a",
          "option_text": "Providing an additional small hint or keywords in the prompt to guide the LLM toward a desired specific response",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-24-b",
          "option_text": "Sending prompts via high-speed directional Wi-Fi antennas",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-24-c",
          "option_text": "Aligning LLMs with human preferences via RLHF",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-24-d",
          "option_text": "Forcing the model to process tokens from right to left",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-25",
      "question_text": "What is the difference between Pre-training, Fine-tuning, and Prompt Engineering?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-25-a",
          "option_text": "Pre-training learns from raw internet data, Fine-tuning adjusts weights for a task, Prompt Engineering guides without weight updates",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-25-b",
          "option_text": "Prompt Engineering modifies weights, Fine-tuning does not",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-25-c",
          "option_text": "Pre-training is done locally on user devices; Prompt Engineering requires a supercomputer",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-25-d",
          "option_text": "There is no difference; all three mean the same thing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-26",
      "question_text": "What is 'Context Window' in a Large Language Model?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-26-a",
          "option_text": "The maximum number of tokens (prompt + completion) the model can process simultaneously in a single request",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-26-b",
          "option_text": "The browser window where the chat interface is rendered",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-26-c",
          "option_text": "The duration of time an API key remains active",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-26-d",
          "option_text": "The cache memory allocated per thread on the CPU",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-27",
      "question_text": "What is 'Indirect Prompt Injection'?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-27-a",
          "option_text": "When malicious prompt instructions are hidden inside third-party untrusted data (like a webpage or email) read by the LLM",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-27-b",
          "option_text": "When a user asks another human to prompt the model for them",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-27-c",
          "option_text": "When a database query fails due to syntax errors",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-27-d",
          "option_text": "When an LLM calls another LLM recursively",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-28",
      "question_text": "Which component converts human text into numerical tokens for LLM transformer processing?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-28-a",
          "option_text": "Tokenizer (e.g. Byte-Pair Encoding)",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-28-b",
          "option_text": "Vector Database",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-28-c",
          "option_text": "Softmax Layer",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-28-d",
          "option_text": "GPU Tensor Core",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-29",
      "question_text": "In prompt optimization, what does 'Few-Shot with CoT' combine?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-29-a",
          "option_text": "Exemplar demonstrations showing both the input, step-by-step reasoning, and the final answer",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-29-b",
          "option_text": "Zero prompts with high temperature",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-29-c",
          "option_text": "Reinforcement learning with negative weights",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-29-d",
          "option_text": "Random token sampling without examples",
          "is_correct": false
        }
      ]
    },
    {
      "id": "prompt-engineering-30",
      "question_text": "What is 'Self-Refinement' (or Reflexion) in autonomous LLM agent prompting?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "prompt-engineering-30-a",
          "option_text": "Having the LLM critique and iteratively improve its own previous output before providing the final answer",
          "is_correct": true
        },
        {
          "id": "prompt-engineering-30-b",
          "option_text": "Compacting the model's neural network weights into a smaller model",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-30-c",
          "option_text": "Resetting the chat memory after each message",
          "is_correct": false
        },
        {
          "id": "prompt-engineering-30-d",
          "option_text": "Translating the prompt into machine language",
          "is_correct": false
        }
      ]
    }
  ],
  "mechanical-engineering": [
    {
      "id": "mechanical-engineering-1",
      "question_text": "According to Newton's Second Law of Motion, what is the mathematical formula for force?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-1-a",
          "option_text": "F = m * a",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-1-b",
          "option_text": "F = m / a",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-1-c",
          "option_text": "F = m * v^2",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-1-d",
          "option_text": "F = 0.5 * m * v",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-2",
      "question_text": "What does Ohm's Law state for an ideal electrical resistor?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-2-a",
          "option_text": "V = I * R",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-2-b",
          "option_text": "V = I / R",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-2-c",
          "option_text": "P = V * R",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-2-d",
          "option_text": "I = V * R",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-3",
      "question_text": "Which thermodynamic cycle represents the ideal theoretical maximum efficiency for a heat engine operating between two temperatures?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-3-a",
          "option_text": "Carnot Cycle",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-3-b",
          "option_text": "Rankine Cycle",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-3-c",
          "option_text": "Otto Cycle",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-3-d",
          "option_text": "Diesel Cycle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-4",
      "question_text": "In structural mechanics, what does the Hooke's Law state within the elastic limit?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-4-a",
          "option_text": "Stress is directly proportional to Strain",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-4-b",
          "option_text": "Strain is inversely proportional to Area",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-4-c",
          "option_text": "Force equals Mass times Velocity",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-4-d",
          "option_text": "Pressure is constant throughout the cross-section",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-5",
      "question_text": "Which semiconductor component conducts current primarily in only one direction?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-5-a",
          "option_text": "Diode",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-5-b",
          "option_text": "Capacitor",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-5-c",
          "option_text": "Inductor",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-5-d",
          "option_text": "Transformer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-6",
      "question_text": "In fluid mechanics, what principle explains the lift generated by an aircraft wing due to fluid velocity and pressure differences?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-6-a",
          "option_text": "Bernoulli's Principle",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-6-b",
          "option_text": "Archimedes' Principle",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-6-c",
          "option_text": "Pascal's Law",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-6-d",
          "option_text": "Fourier's Law",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-7",
      "question_text": "What is the SI unit of electrical capacitance?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-7-a",
          "option_text": "Farad",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-7-b",
          "option_text": "Henry",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-7-c",
          "option_text": "Tesla",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-7-d",
          "option_text": "Weber",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-8",
      "question_text": "In civil engineering, what is the primary structural function of reinforced steel rebar inside concrete beams?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-8-a",
          "option_text": "To resist tensile stresses while concrete resists compressive stresses",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-8-b",
          "option_text": "To prevent concrete from absorbing water",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-8-c",
          "option_text": "To decrease the overall density of the structure",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-8-d",
          "option_text": "To conduct electrical ground currents",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-9",
      "question_text": "Which logic gate outputs HIGH (1) if and only if all of its inputs are HIGH (1)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-9-a",
          "option_text": "AND Gate",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-9-b",
          "option_text": "OR Gate",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-9-c",
          "option_text": "XOR Gate",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-9-d",
          "option_text": "NOT Gate",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-10",
      "question_text": "What type of stress occurs when opposing forces act parallel to the cross-sectional plane of a material?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-10-a",
          "option_text": "Shear Stress",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-10-b",
          "option_text": "Tensile Stress",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-10-c",
          "option_text": "Compressive Stress",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-10-d",
          "option_text": "Bending Stress",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-11",
      "question_text": "What law states that the total current entering a circuit junction must equal the total current leaving that junction?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-11-a",
          "option_text": "Kirchhoff's Current Law (KCL)",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-11-b",
          "option_text": "Kirchhoff's Voltage Law (KVL)",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-11-c",
          "option_text": "Ampere's Law",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-11-d",
          "option_text": "Faraday's Law",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-12",
      "question_text": "In mechanical engineering, what is the ratio of pitch diameter to the number of teeth on a gear called?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-12-a",
          "option_text": "Module",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-12-b",
          "option_text": "Diametral Pitch",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-12-c",
          "option_text": "Circular Pitch",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-12-d",
          "option_text": "Addendum",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-13",
      "question_text": "What is the primary function of a step-down electrical transformer?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-13-a",
          "option_text": "Decreasing voltage while increasing current",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-13-b",
          "option_text": "Increasing voltage while decreasing current",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-13-c",
          "option_text": "Converting AC electricity to DC electricity",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-13-d",
          "option_text": "Storing energy in an electrostatic field",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-14",
      "question_text": "Which property describes a material's ability to undergo significant permanent plastic deformation before fracture?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-14-a",
          "option_text": "Ductility",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-14-b",
          "option_text": "Brittleness",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-14-c",
          "option_text": "Hardness",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-14-d",
          "option_text": "Resilience",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-15",
      "question_text": "In electronics, what terminal of a Bipolar Junction Transistor (BJT) controls the flow of majority carriers?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-15-a",
          "option_text": "Base",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-15-b",
          "option_text": "Collector",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-15-c",
          "option_text": "Emitter",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-15-d",
          "option_text": "Gate",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-16",
      "question_text": "What type of foundation is most suitable when surface soils have low bearing capacity and structural loads must reach deep bedrock?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-16-a",
          "option_text": "Pile Foundation",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-16-b",
          "option_text": "Strip Footing",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-16-c",
          "option_text": "Spread Footing",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-16-d",
          "option_text": "Isolated Pad Footing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-17",
      "question_text": "What does the First Law of Thermodynamics fundamentally express?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-17-a",
          "option_text": "Conservation of Energy",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-17-b",
          "option_text": "Increase of Entropy",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-17-c",
          "option_text": "Absolute zero temperature limit",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-17-d",
          "option_text": "Thermal equilibrium between bodies",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-18",
      "question_text": "Which instrument is used to measure electrical potential difference across two points without drawing substantial current?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-18-a",
          "option_text": "Voltmeter",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-18-b",
          "option_text": "Ammeter",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-18-c",
          "option_text": "Ohmmeter",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-18-d",
          "option_text": "Galvanometer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-19",
      "question_text": "What is the relationship between torque (T), rotational speed (omega), and power (P) in mechanical drives?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-19-a",
          "option_text": "P = T * omega",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-19-b",
          "option_text": "P = T / omega",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-19-c",
          "option_text": "P = T^2 * omega",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-19-d",
          "option_text": "T = P * omega",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-20",
      "question_text": "In communications engineering, what modulation technique varies the frequency of a carrier wave in proportion to the message signal?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-20-a",
          "option_text": "Frequency Modulation (FM)",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-20-b",
          "option_text": "Amplitude Modulation (AM)",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-20-c",
          "option_text": "Phase Modulation (PM)",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-20-d",
          "option_text": "Pulse Code Modulation (PCM)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-21",
      "question_text": "What is the point on a stress-strain curve beyond which deformation is irreversible and permanent?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-21-a",
          "option_text": "Yield Point",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-21-b",
          "option_text": "Proportional Limit",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-21-c",
          "option_text": "Ultimate Tensile Strength",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-21-d",
          "option_text": "Fracture Point",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-22",
      "question_text": "What is the standard frequency of AC mains power transmission in India?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-22-a",
          "option_text": "50 Hz",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-22-b",
          "option_text": "60 Hz",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-22-c",
          "option_text": "100 Hz",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-22-d",
          "option_text": "120 Hz",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-23",
      "question_text": "Which thermal transfer mechanism does not require any material medium to propagate heat?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-23-a",
          "option_text": "Radiation",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-23-b",
          "option_text": "Conduction",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-23-c",
          "option_text": "Convection",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-23-d",
          "option_text": "Advection",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-24",
      "question_text": "What is the primary constituent of Portland cement responsible for early compressive strength development?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-24-a",
          "option_text": "Tricalcium Silicate (C3S)",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-24-b",
          "option_text": "Dicalcium Silicate (C2S)",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-24-c",
          "option_text": "Tricalcium Aluminate (C3A)",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-24-d",
          "option_text": "Gypsum",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-25",
      "question_text": "In an RLC circuit, what condition occurs when inductive reactance equals capacitive reactance (XL = XC)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-25-a",
          "option_text": "Resonance",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-25-b",
          "option_text": "Antiresonance",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-25-c",
          "option_text": "Short Circuit",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-25-d",
          "option_text": "Open Circuit",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-26",
      "question_text": "Which machine element is used to support rotating shafts while minimizing rotational friction?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-26-a",
          "option_text": "Bearing",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-26-b",
          "option_text": "Coupling",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-26-c",
          "option_text": "Keyway",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-26-d",
          "option_text": "Flywheel",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-27",
      "question_text": "What type of survey instrument measures both horizontal and vertical angles as well as slope distances electronically?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-27-a",
          "option_text": "Total Station",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-27-b",
          "option_text": "Theodolite",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-27-c",
          "option_text": "Dumpy Level",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-27-d",
          "option_text": "Prismatic Compass",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-28",
      "question_text": "What is the operational purpose of an op-amp configured with negative feedback?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-28-a",
          "option_text": "Stabilizing closed-loop gain and broadening bandwidth",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-28-b",
          "option_text": "Maximizing open-loop saturation",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-28-c",
          "option_text": "Generating high-frequency carrier oscillations",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-28-d",
          "option_text": "Eliminating input impedance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-29",
      "question_text": "In a 4-stroke internal combustion engine, during which stroke is mechanical work delivered to the crankshaft?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-29-a",
          "option_text": "Power (Expansion) Stroke",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-29-b",
          "option_text": "Compression Stroke",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-29-c",
          "option_text": "Intake Stroke",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-29-d",
          "option_text": "Exhaust Stroke",
          "is_correct": false
        }
      ]
    },
    {
      "id": "mechanical-engineering-30",
      "question_text": "What does the Reynolds Number in fluid dynamics indicate?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "mechanical-engineering-30-a",
          "option_text": "Ratio of inertial forces to viscous forces",
          "is_correct": true
        },
        {
          "id": "mechanical-engineering-30-b",
          "option_text": "Ratio of buoyant forces to drag forces",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-30-c",
          "option_text": "Ratio of pressure forces to surface tension",
          "is_correct": false
        },
        {
          "id": "mechanical-engineering-30-d",
          "option_text": "Velocity of sound in the medium",
          "is_correct": false
        }
      ]
    }
  ],
  "biotechnology": [
    {
      "id": "biotechnology-1",
      "question_text": "What enzyme is primarily used in Polymerase Chain Reaction (PCR) to synthesize new DNA strands at high temperatures?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-1-a",
          "option_text": "Taq Polymerase (from Thermus aquaticus)",
          "is_correct": true
        },
        {
          "id": "biotechnology-1-b",
          "option_text": "DNA Ligase",
          "is_correct": false
        },
        {
          "id": "biotechnology-1-c",
          "option_text": "RNA Polymerase II",
          "is_correct": false
        },
        {
          "id": "biotechnology-1-d",
          "option_text": "DNA Topoisomerase",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-2",
      "question_text": "In recombinant DNA technology, which enzymes act as 'molecular scissors' to cleave DNA at specific palindromic recognition sequences?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-2-a",
          "option_text": "Restriction Endonucleases",
          "is_correct": true
        },
        {
          "id": "biotechnology-2-b",
          "option_text": "DNA Polymerases",
          "is_correct": false
        },
        {
          "id": "biotechnology-2-c",
          "option_text": "Reverse Transcriptases",
          "is_correct": false
        },
        {
          "id": "biotechnology-2-d",
          "option_text": "Exonucleases",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-3",
      "question_text": "What is the primary function of DNA Ligase during molecular cloning?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-3-a",
          "option_text": "Catalyzing the formation of phosphodiester bonds between adjacent DNA fragments",
          "is_correct": true
        },
        {
          "id": "biotechnology-3-b",
          "option_text": "Unwinding the DNA double helix",
          "is_correct": false
        },
        {
          "id": "biotechnology-3-c",
          "option_text": "Synthesizing RNA primers",
          "is_correct": false
        },
        {
          "id": "biotechnology-3-d",
          "option_text": "Degrading bacterial cell walls",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-4",
      "question_text": "Which genome editing technology utilizes a synthetic guide RNA (gRNA) and an endonuclease to create targeted double-strand breaks?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-4-a",
          "option_text": "CRISPR-Cas9",
          "is_correct": true
        },
        {
          "id": "biotechnology-4-b",
          "option_text": "Sanger Sequencing",
          "is_correct": false
        },
        {
          "id": "biotechnology-4-c",
          "option_text": "Northern Blotting",
          "is_correct": false
        },
        {
          "id": "biotechnology-4-d",
          "option_text": "Microarray Analysis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-5",
      "question_text": "In Sanger chain-termination DNA sequencing, which modified nucleotides terminate further strand elongation?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-5-a",
          "option_text": "Dideoxynucleotide triphosphates (ddNTPs)",
          "is_correct": true
        },
        {
          "id": "biotechnology-5-b",
          "option_text": "Deoxynucleotide triphosphates (dNTPs)",
          "is_correct": false
        },
        {
          "id": "biotechnology-5-c",
          "option_text": "Ribonucleotide triphosphates (rNTPs)",
          "is_correct": false
        },
        {
          "id": "biotechnology-5-d",
          "option_text": "Methylated cytosines",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-6",
      "question_text": "What widely-used bioinformatics tool finds regions of local similarity between biological nucleotide or protein sequences?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-6-a",
          "option_text": "BLAST (Basic Local Alignment Search Tool)",
          "is_correct": true
        },
        {
          "id": "biotechnology-6-b",
          "option_text": "AutoCAD",
          "is_correct": false
        },
        {
          "id": "biotechnology-6-c",
          "option_text": "Docker",
          "is_correct": false
        },
        {
          "id": "biotechnology-6-d",
          "option_text": "Apache Spark",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-7",
      "question_text": "In Western Blotting, which biological molecule is specifically detected and quantified using target antibodies?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-7-a",
          "option_text": "Specific target proteins",
          "is_correct": true
        },
        {
          "id": "biotechnology-7-b",
          "option_text": "Double-stranded DNA fragments",
          "is_correct": false
        },
        {
          "id": "biotechnology-7-c",
          "option_text": "Messenger RNA transcripts",
          "is_correct": false
        },
        {
          "id": "biotechnology-7-d",
          "option_text": "Lipid bilayer membranes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-8",
      "question_text": "Which technique is standardly used in downstream bioprocessing to separate and purify proteins based on charge, size, or affinity?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-8-a",
          "option_text": "Column Chromatography (e.g. Affinity or Ion-Exchange)",
          "is_correct": true
        },
        {
          "id": "biotechnology-8-b",
          "option_text": "Centrifugal Milling",
          "is_correct": false
        },
        {
          "id": "biotechnology-8-c",
          "option_text": "Distillation Fractionation",
          "is_correct": false
        },
        {
          "id": "biotechnology-8-d",
          "option_text": "Sintering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-9",
      "question_text": "In eukaryotic gene expression, what post-transcriptional process removes non-coding introns and splices exons together?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-9-a",
          "option_text": "RNA Splicing",
          "is_correct": true
        },
        {
          "id": "biotechnology-9-b",
          "option_text": "DNA Replication",
          "is_correct": false
        },
        {
          "id": "biotechnology-9-c",
          "option_text": "Western Blotting",
          "is_correct": false
        },
        {
          "id": "biotechnology-9-d",
          "option_text": "Cell Lysis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-10",
      "question_text": "What is a circular, double-stranded extra-chromosomal DNA molecule commonly used as a cloning vector in genetic engineering?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-10-a",
          "option_text": "Plasmid",
          "is_correct": true
        },
        {
          "id": "biotechnology-10-b",
          "option_text": "Ribosome",
          "is_correct": false
        },
        {
          "id": "biotechnology-10-c",
          "option_text": "Centrosome",
          "is_correct": false
        },
        {
          "id": "biotechnology-10-d",
          "option_text": "Bacteriophage coat",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-11",
      "question_text": "Which immunological assay uses enzyme-linked antibodies to detect and quantify soluble antigens or antibodies in liquid samples?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-11-a",
          "option_text": "ELISA (Enzyme-Linked Immunosorbent Assay)",
          "is_correct": true
        },
        {
          "id": "biotechnology-11-b",
          "option_text": "Gas Chromatography",
          "is_correct": false
        },
        {
          "id": "biotechnology-11-c",
          "option_text": "X-ray Diffraction",
          "is_correct": false
        },
        {
          "id": "biotechnology-11-d",
          "option_text": "Polyacrylamide Gel Drying",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-12",
      "question_text": "In industrial fermentation and bioprocessing, what specialized vessel maintains controlled temperature, pH, and dissolved oxygen for microbial growth?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-12-a",
          "option_text": "Bioreactor / Fermenter",
          "is_correct": true
        },
        {
          "id": "biotechnology-12-b",
          "option_text": "Autoclave Chamber",
          "is_correct": false
        },
        {
          "id": "biotechnology-12-c",
          "option_text": "Bunsen Burner",
          "is_correct": false
        },
        {
          "id": "biotechnology-12-d",
          "option_text": "Centrifugal Dryer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-13",
      "question_text": "What text-based file format in bioinformatics represents nucleotide or peptide sequences using single-letter codes preceded by a header line starting with '>'?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-13-a",
          "option_text": "FASTA format",
          "is_correct": true
        },
        {
          "id": "biotechnology-13-b",
          "option_text": "JSON Schema",
          "is_correct": false
        },
        {
          "id": "biotechnology-13-c",
          "option_text": "CSV Matrix",
          "is_correct": false
        },
        {
          "id": "biotechnology-13-d",
          "option_text": "YAML Config",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-14",
      "question_text": "Which high-throughput genomic technique is used to measure the global expression levels of thousands of RNA transcripts simultaneously?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-14-a",
          "option_text": "RNA-Seq (Next-Generation RNA Sequencing)",
          "is_correct": true
        },
        {
          "id": "biotechnology-14-b",
          "option_text": "Southern Blotting",
          "is_correct": false
        },
        {
          "id": "biotechnology-14-c",
          "option_text": "Paper Chromatography",
          "is_correct": false
        },
        {
          "id": "biotechnology-14-d",
          "option_text": "Gram Staining",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-15",
      "question_text": "In molecular biology and cDNA library construction, what enzyme synthesizes complementary DNA (cDNA) using an RNA template?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-15-a",
          "option_text": "Reverse Transcriptase",
          "is_correct": true
        },
        {
          "id": "biotechnology-15-b",
          "option_text": "DNA Gyrase",
          "is_correct": false
        },
        {
          "id": "biotechnology-15-c",
          "option_text": "Alkaline Phosphatase",
          "is_correct": false
        },
        {
          "id": "biotechnology-15-d",
          "option_text": "RNA Helicase",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-16",
      "question_text": "What is the computational process of identifying genes, coding regions, and regulatory motifs within raw genomic sequence assemblies?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-16-a",
          "option_text": "Genome Annotation",
          "is_correct": true
        },
        {
          "id": "biotechnology-16-b",
          "option_text": "Genome Translation",
          "is_correct": false
        },
        {
          "id": "biotechnology-16-c",
          "option_text": "Sequence Annealing",
          "is_correct": false
        },
        {
          "id": "biotechnology-16-d",
          "option_text": "Colony PCR",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-17",
      "question_text": "In agarose gel electrophoresis, toward which electrode do negatively charged DNA fragments migrate, and which fragments travel fastest?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-17-a",
          "option_text": "Toward the positive anode; smaller fragments travel faster",
          "is_correct": true
        },
        {
          "id": "biotechnology-17-b",
          "option_text": "Toward the negative cathode; larger fragments travel faster",
          "is_correct": false
        },
        {
          "id": "biotechnology-17-c",
          "option_text": "Toward the negative cathode; smaller fragments travel faster",
          "is_correct": false
        },
        {
          "id": "biotechnology-17-d",
          "option_text": "Toward the positive anode; larger fragments travel faster",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-18",
      "question_text": "Monoclonal antibodies are industrially produced using hybridoma technology by fusing which two specific cell types?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-18-a",
          "option_text": "B lymphocytes (antibody-producing plasma cells) and Myeloma (cancer) cells",
          "is_correct": true
        },
        {
          "id": "biotechnology-18-b",
          "option_text": "T lymphocytes and Red Blood cells",
          "is_correct": false
        },
        {
          "id": "biotechnology-18-c",
          "option_text": "Bacterial E. coli and Yeast cells",
          "is_correct": false
        },
        {
          "id": "biotechnology-18-d",
          "option_text": "Macrophage cells and Fibroblasts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-19",
      "question_text": "Which comprehensive public biological repository hosted by NCBI archives all publicly available DNA and RNA sequence records?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-19-a",
          "option_text": "GenBank",
          "is_correct": true
        },
        {
          "id": "biotechnology-19-b",
          "option_text": "Protein Data Bank (PDB)",
          "is_correct": false
        },
        {
          "id": "biotechnology-19-c",
          "option_text": "GitHub",
          "is_correct": false
        },
        {
          "id": "biotechnology-19-d",
          "option_text": "PubChem",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-20",
      "question_text": "In a closed microbial batch growth curve, which phase is characterized by an exponential increase in viable bacterial cell numbers?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-20-a",
          "option_text": "Log (Exponential) Phase",
          "is_correct": true
        },
        {
          "id": "biotechnology-20-b",
          "option_text": "Lag Phase",
          "is_correct": false
        },
        {
          "id": "biotechnology-20-c",
          "option_text": "Stationary Phase",
          "is_correct": false
        },
        {
          "id": "biotechnology-20-d",
          "option_text": "Death (Decline) Phase",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-21",
      "question_text": "What is the primary analytical application of Mass Spectrometry (MS) in modern proteomics?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-21-a",
          "option_text": "Accurately determining protein molecular mass, sequence identity, and post-translational modifications (m/z)",
          "is_correct": true
        },
        {
          "id": "biotechnology-21-b",
          "option_text": "Amplifying DNA templates exponentially",
          "is_correct": false
        },
        {
          "id": "biotechnology-21-c",
          "option_text": "Visualizing live bacterial motility under dark-field microscopy",
          "is_correct": false
        },
        {
          "id": "biotechnology-21-d",
          "option_text": "Measuring osmotic pressure in blood plasma",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-22",
      "question_text": "Which term denotes an organism whose genome has been stably altered by the introduction of foreign exogenous recombinant DNA?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-22-a",
          "option_text": "Transgenic Organism (Genetically Modified Organism)",
          "is_correct": true
        },
        {
          "id": "biotechnology-22-b",
          "option_text": "Wild-type Strain",
          "is_correct": false
        },
        {
          "id": "biotechnology-22-c",
          "option_text": "Polyploid Hybrid",
          "is_correct": false
        },
        {
          "id": "biotechnology-22-d",
          "option_text": "Obligate Aerobe",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-23",
      "question_text": "In bioinformatics sequence analysis, which scoring substitution matrix is standardly used for comparing moderately divergent protein alignments?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-23-a",
          "option_text": "BLOSUM62",
          "is_correct": true
        },
        {
          "id": "biotechnology-23-b",
          "option_text": "Identity Matrix",
          "is_correct": false
        },
        {
          "id": "biotechnology-23-c",
          "option_text": "ASCII Lookup Table",
          "is_correct": false
        },
        {
          "id": "biotechnology-23-d",
          "option_text": "Hamming Distance Table",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-24",
      "question_text": "Which fluorescent intercalating dye is widely added to agarose gels to visualize separated DNA bands under ultraviolet light?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-24-a",
          "option_text": "Ethidium Bromide (or GelRed / SYBR Safe)",
          "is_correct": true
        },
        {
          "id": "biotechnology-24-b",
          "option_text": "Crystal Violet",
          "is_correct": false
        },
        {
          "id": "biotechnology-24-c",
          "option_text": "Methylene Blue",
          "is_correct": false
        },
        {
          "id": "biotechnology-24-d",
          "option_text": "Phenolphthalein",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-25",
      "question_text": "Which cellular enzyme is responsible for unwinding the double-stranded DNA helix at the replication fork in living cells?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-25-a",
          "option_text": "DNA Helicase",
          "is_correct": true
        },
        {
          "id": "biotechnology-25-b",
          "option_text": "DNA Ligase",
          "is_correct": false
        },
        {
          "id": "biotechnology-25-c",
          "option_text": "DNA Polymerase I",
          "is_correct": false
        },
        {
          "id": "biotechnology-25-d",
          "option_text": "Topoisomerase II",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-26",
      "question_text": "In biopharmaceuticals, what is a 'Biosimilar' drug?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-26-a",
          "option_text": "A biologic medical product highly similar to an already approved reference biologic with no clinically meaningful differences",
          "is_correct": true
        },
        {
          "id": "biotechnology-26-b",
          "option_text": "A synthetic small-molecule generic chemical compound",
          "is_correct": false
        },
        {
          "id": "biotechnology-26-c",
          "option_text": "An herbal homeopathic nutritional supplement",
          "is_correct": false
        },
        {
          "id": "biotechnology-26-d",
          "option_text": "A completely untested novel experimental vaccine",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-27",
      "question_text": "What field of genomics analyzes the collective genomic DNA extracted directly from whole environmental or clinical microbiome communities?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-27-a",
          "option_text": "Metagenomics",
          "is_correct": true
        },
        {
          "id": "biotechnology-27-b",
          "option_text": "Single-cell Epigenetics",
          "is_correct": false
        },
        {
          "id": "biotechnology-27-c",
          "option_text": "Structural Crystallography",
          "is_correct": false
        },
        {
          "id": "biotechnology-27-d",
          "option_text": "Comparative Anatomy",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-28",
      "question_text": "In mammalian cell culture, what gas concentration and buffer system is standardly used in incubators to maintain physiological pH 7.4?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-28-a",
          "option_text": "5% CO2 atmosphere with Sodium Bicarbonate buffer in media",
          "is_correct": true
        },
        {
          "id": "biotechnology-28-b",
          "option_text": "100% Oxygen with Acetic acid buffer",
          "is_correct": false
        },
        {
          "id": "biotechnology-28-c",
          "option_text": "Pure Nitrogen with Potassium Hydroxide",
          "is_correct": false
        },
        {
          "id": "biotechnology-28-d",
          "option_text": "Argon gas with Hydrochloric acid",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-29",
      "question_text": "In molecular biology, which hybridization blotting technique is specifically designed to detect target DNA sequences using labeled probes?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-29-a",
          "option_text": "Southern Blotting",
          "is_correct": true
        },
        {
          "id": "biotechnology-29-b",
          "option_text": "Northern Blotting (for RNA)",
          "is_correct": false
        },
        {
          "id": "biotechnology-29-c",
          "option_text": "Western Blotting (for Proteins)",
          "is_correct": false
        },
        {
          "id": "biotechnology-29-d",
          "option_text": "Eastern Blotting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biotechnology-30",
      "question_text": "What computational deep learning system developed by DeepMind accurately predicts the 3D tertiary structures of proteins from primary amino acid sequences?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biotechnology-30-a",
          "option_text": "AlphaFold",
          "is_correct": true
        },
        {
          "id": "biotechnology-30-b",
          "option_text": "ChatGPT",
          "is_correct": false
        },
        {
          "id": "biotechnology-30-c",
          "option_text": "TensorFlow Lite",
          "is_correct": false
        },
        {
          "id": "biotechnology-30-d",
          "option_text": "CRISPR-Cas12",
          "is_correct": false
        }
      ]
    }
  ],
  "civil-engineering": [
    {
      "id": "civil-engineering-1",
      "question_text": "What test is standardly performed on fresh concrete on a construction site to measure its workability and consistency?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-1-a",
          "option_text": "Slump Cone Test",
          "is_correct": true
        },
        {
          "id": "civil-engineering-1-b",
          "option_text": "Tensile Split Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-1-c",
          "option_text": "Core Cutter Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-1-d",
          "option_text": "Proctor Compaction Test",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-2",
      "question_text": "In structural reinforced concrete (RCC) design, why is steel rebar positioned in the tension zone of a horizontal beam?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-2-a",
          "option_text": "Concrete is strong in compression but weak in tension; steel carries the tensile stresses",
          "is_correct": true
        },
        {
          "id": "civil-engineering-2-b",
          "option_text": "Steel prevents water absorption into the concrete core",
          "is_correct": false
        },
        {
          "id": "civil-engineering-2-c",
          "option_text": "Steel reduces the dead weight of the concrete beam",
          "is_correct": false
        },
        {
          "id": "civil-engineering-2-d",
          "option_text": "Steel provides thermal insulation against ambient freezing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-3",
      "question_text": "What laboratory test is conducted on soil samples to determine their optimum moisture content (OMC) and maximum dry density (MDD)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-3-a",
          "option_text": "Standard Proctor Compaction Test",
          "is_correct": true
        },
        {
          "id": "civil-engineering-3-b",
          "option_text": "Direct Shear Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-3-c",
          "option_text": "Hydrometer Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-3-d",
          "option_text": "Atterberg Limit Test",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-4",
      "question_text": "In geotechnical engineering, what equation proposed by Karl Terzaghi is widely used to calculate the ultimate bearing capacity of shallow strip footings?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-4-a",
          "option_text": "q_ult = c*Nc + q*Nq + 0.5*gamma*B*Ngamma",
          "is_correct": true
        },
        {
          "id": "civil-engineering-4-b",
          "option_text": "V = I * R",
          "is_correct": false
        },
        {
          "id": "civil-engineering-4-c",
          "option_text": "PV = nRT",
          "is_correct": false
        },
        {
          "id": "civil-engineering-4-d",
          "option_text": "F = m * a",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-5",
      "question_text": "Which advanced surveying instrument integrates an electronic theodolite, an electronic distance meter (EDM), and internal microprocessor data logging?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-5-a",
          "option_text": "Total Station",
          "is_correct": true
        },
        {
          "id": "civil-engineering-5-b",
          "option_text": "Dumpy Level",
          "is_correct": false
        },
        {
          "id": "civil-engineering-5-c",
          "option_text": "Cross Staff",
          "is_correct": false
        },
        {
          "id": "civil-engineering-5-d",
          "option_text": "Prismatic Compass",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-6",
      "question_text": "In prestressed concrete structures, what is the primary structural advantage over conventional reinforced concrete?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-6-a",
          "option_text": "Internal compressive stresses counteract external tensile loads, reducing cracking and deflections",
          "is_correct": true
        },
        {
          "id": "civil-engineering-6-b",
          "option_text": "Prestressed concrete requires no steel tendons or cables",
          "is_correct": false
        },
        {
          "id": "civil-engineering-6-c",
          "option_text": "It completely eliminates the curing period of concrete",
          "is_correct": false
        },
        {
          "id": "civil-engineering-6-d",
          "option_text": "It increases concrete permeability for drainage",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-7",
      "question_text": "What law governs the laminar flow of groundwater through a porous soil medium?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-7-a",
          "option_text": "Darcy's Law (Q = k * i * A)",
          "is_correct": true
        },
        {
          "id": "civil-engineering-7-b",
          "option_text": "Hooke's Law",
          "is_correct": false
        },
        {
          "id": "civil-engineering-7-c",
          "option_text": "Bernoulli's Equation",
          "is_correct": false
        },
        {
          "id": "civil-engineering-7-d",
          "option_text": "Newton's Law of Viscosity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-8",
      "question_text": "In highway and flexible pavement design, what empirical penetration test measures the mechanical strength of subgrade soil?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-8-a",
          "option_text": "California Bearing Ratio (CBR) Test",
          "is_correct": true
        },
        {
          "id": "civil-engineering-8-b",
          "option_text": "Vicat Needle Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-8-c",
          "option_text": "Los Angeles Abrasion Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-8-d",
          "option_text": "Soundness Test",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-9",
      "question_text": "In structural column analysis, what formula gives the theoretical critical buckling load (P_cr) for an ideal slender column?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-9-a",
          "option_text": "Euler's Buckling Formula (P_cr = pi^2 * E * I / L_eff^2)",
          "is_correct": true
        },
        {
          "id": "civil-engineering-9-b",
          "option_text": "Rankine Formula",
          "is_correct": false
        },
        {
          "id": "civil-engineering-9-c",
          "option_text": "Mohr's Circle Equation",
          "is_correct": false
        },
        {
          "id": "civil-engineering-9-d",
          "option_text": "Castigliano's Theorem",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-10",
      "question_text": "In truss analysis, which method involves isolating individual joints as concurrent coplanar force systems in static equilibrium?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-10-a",
          "option_text": "Method of Joints",
          "is_correct": true
        },
        {
          "id": "civil-engineering-10-b",
          "option_text": "Finite Difference Method",
          "is_correct": false
        },
        {
          "id": "civil-engineering-10-c",
          "option_text": "Moment Distribution Method",
          "is_correct": false
        },
        {
          "id": "civil-engineering-10-d",
          "option_text": "Slope Deflection Method",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-11",
      "question_text": "How does an increase in the Water-Cement (w/c) ratio beyond the optimum affect the compressive strength of hardened concrete?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-11-a",
          "option_text": "Significantly decreases compressive strength due to increased capillary porosity",
          "is_correct": true
        },
        {
          "id": "civil-engineering-11-b",
          "option_text": "Increases compressive strength exponentially",
          "is_correct": false
        },
        {
          "id": "civil-engineering-11-c",
          "option_text": "Has zero impact on mechanical strength",
          "is_correct": false
        },
        {
          "id": "civil-engineering-11-d",
          "option_text": "Increases tensile resistance without affecting compression",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-12",
      "question_text": "In geotechnical retaining wall design, which theory assumes a cohesionless, dry granular soil mass with planar rupture surfaces?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-12-a",
          "option_text": "Rankine's Earth Pressure Theory",
          "is_correct": true
        },
        {
          "id": "civil-engineering-12-b",
          "option_text": "Boussinesq Stress Theory",
          "is_correct": false
        },
        {
          "id": "civil-engineering-12-c",
          "option_text": "Westergaard Theory",
          "is_correct": false
        },
        {
          "id": "civil-engineering-12-d",
          "option_text": "Bishop's Slip Circle Method",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-13",
      "question_text": "In environmental wastewater engineering, what parameter quantifies the amount of dissolved oxygen required by aerobic microorganisms to decompose organic matter?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-13-a",
          "option_text": "Biochemical Oxygen Demand (BOD5)",
          "is_correct": true
        },
        {
          "id": "civil-engineering-13-b",
          "option_text": "Chemical Oxygen Demand (COD)",
          "is_correct": false
        },
        {
          "id": "civil-engineering-13-c",
          "option_text": "Total Suspended Solids (TSS)",
          "is_correct": false
        },
        {
          "id": "civil-engineering-13-d",
          "option_text": "Turbidity Index",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-14",
      "question_text": "In hydrology and stormwater design, what is the 'Rational Formula' used to estimate peak surface runoff discharge?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-14-a",
          "option_text": "Q = C * I * A",
          "is_correct": true
        },
        {
          "id": "civil-engineering-14-b",
          "option_text": "Q = A * V",
          "is_correct": false
        },
        {
          "id": "civil-engineering-14-c",
          "option_text": "H = f * L * V^2 / (2 * g * D)",
          "is_correct": false
        },
        {
          "id": "civil-engineering-14-d",
          "option_text": "P = 2 * pi * N * T / 60",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-15",
      "question_text": "Which cement property is determined in the laboratory using a Vicat apparatus with standard needles?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-15-a",
          "option_text": "Initial and Final Setting Times and Normal Consistency",
          "is_correct": true
        },
        {
          "id": "civil-engineering-15-b",
          "option_text": "Compressive Strength of Mortar Cubes",
          "is_correct": false
        },
        {
          "id": "civil-engineering-15-c",
          "option_text": "Soundness due to Free Lime",
          "is_correct": false
        },
        {
          "id": "civil-engineering-15-d",
          "option_text": "Fineness by Sieve Analysis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-16",
      "question_text": "In structural analysis, what does a Shear Force Diagram (SFD) plot across the span of a loaded beam?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-16-a",
          "option_text": "Internal vertical transverse shear force at each cross-section",
          "is_correct": true
        },
        {
          "id": "civil-engineering-16-b",
          "option_text": "External bending moments only",
          "is_correct": false
        },
        {
          "id": "civil-engineering-16-c",
          "option_text": "Axial tension in the supports",
          "is_correct": false
        },
        {
          "id": "civil-engineering-16-d",
          "option_text": "Deflection angle in radians",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-17",
      "question_text": "In earthquake-resistant structural engineering, what design characteristic allows a building frame to undergo large inelastic deformations without sudden collapse?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-17-a",
          "option_text": "Ductility",
          "is_correct": true
        },
        {
          "id": "civil-engineering-17-b",
          "option_text": "Brittleness",
          "is_correct": false
        },
        {
          "id": "civil-engineering-17-c",
          "option_text": "Thermal Expansion",
          "is_correct": false
        },
        {
          "id": "civil-engineering-17-d",
          "option_text": "Permeability",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-18",
      "question_text": "What laboratory test is conducted on bitumen binders to evaluate their hardness and consistency at 25 degrees Celsius?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-18-a",
          "option_text": "Penetration Test",
          "is_correct": true
        },
        {
          "id": "civil-engineering-18-b",
          "option_text": "Softening Point Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-18-c",
          "option_text": "Ductility Briquette Test",
          "is_correct": false
        },
        {
          "id": "civil-engineering-18-d",
          "option_text": "Flash and Fire Point Test",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-19",
      "question_text": "In open channel hydraulics, what dimensionless number distinguishes subcritical flow (Fr < 1) from supercritical flow (Fr > 1)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-19-a",
          "option_text": "Froude Number (Fr)",
          "is_correct": true
        },
        {
          "id": "civil-engineering-19-b",
          "option_text": "Reynolds Number (Re)",
          "is_correct": false
        },
        {
          "id": "civil-engineering-19-c",
          "option_text": "Mach Number (Ma)",
          "is_correct": false
        },
        {
          "id": "civil-engineering-19-d",
          "option_text": "Weber Number (We)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-20",
      "question_text": "Which foundation type is most suitable for distributing heavy structural column loads over weak, highly compressible soil strata across the entire building footprint?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-20-a",
          "option_text": "Raft (Mat) Foundation",
          "is_correct": true
        },
        {
          "id": "civil-engineering-20-b",
          "option_text": "Isolated Pad Footing",
          "is_correct": false
        },
        {
          "id": "civil-engineering-20-c",
          "option_text": "Stepped Footing",
          "is_correct": false
        },
        {
          "id": "civil-engineering-20-d",
          "option_text": "Strap Footing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-21",
      "question_text": "In soil mechanics, what are the Atterberg limits used to delineate the consistency states of fine-grained cohesive soils?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-21-a",
          "option_text": "Liquid Limit, Plastic Limit, and Shrinkage Limit",
          "is_correct": true
        },
        {
          "id": "civil-engineering-21-b",
          "option_text": "Void Ratio, Porosity, and Degree of Saturation",
          "is_correct": false
        },
        {
          "id": "civil-engineering-21-c",
          "option_text": "Specific Gravity, Unit Weight, and Moisture Content",
          "is_correct": false
        },
        {
          "id": "civil-engineering-21-d",
          "option_text": "Permeability, Cohesion, and Friction Angle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-22",
      "question_text": "What is the primary cause of 'bleeding' in freshly placed concrete?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-22-a",
          "option_text": "Upward migration of excess mixing water to the surface due to settlement of heavier aggregate solids",
          "is_correct": true
        },
        {
          "id": "civil-engineering-22-b",
          "option_text": "Excessive hydration heat during curing",
          "is_correct": false
        },
        {
          "id": "civil-engineering-22-c",
          "option_text": "Reaction of aggregate alkali with silica",
          "is_correct": false
        },
        {
          "id": "civil-engineering-22-d",
          "option_text": "Premature drying of surface cement paste",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-23",
      "question_text": "Which surveying method is used to determine differences in elevation between points on the ground relative to a permanent benchmark?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-23-a",
          "option_text": "Differential Spirit Leveling",
          "is_correct": true
        },
        {
          "id": "civil-engineering-23-b",
          "option_text": "Traversing with Compass",
          "is_correct": false
        },
        {
          "id": "civil-engineering-23-c",
          "option_text": "Triangulation Baseline Measurement",
          "is_correct": false
        },
        {
          "id": "civil-engineering-23-d",
          "option_text": "Plane Table Radiation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-24",
      "question_text": "In structural steel design, what structural failure mode governs the design of slender compression members (struts and columns)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-24-a",
          "option_text": "Elastic or Inelastic Buckling",
          "is_correct": true
        },
        {
          "id": "civil-engineering-24-b",
          "option_text": "Brittle Tensile Rupture",
          "is_correct": false
        },
        {
          "id": "civil-engineering-24-c",
          "option_text": "Creep Deformation",
          "is_correct": false
        },
        {
          "id": "civil-engineering-24-d",
          "option_text": "Surface Fatigue Corrosion",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-25",
      "question_text": "What hydraulic formula calculates flow velocity in open gravity conduits such as sewers and drainage canals?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-25-a",
          "option_text": "Manning's Equation (V = (1/n) * R^(2/3) * S^(1/2))",
          "is_correct": true
        },
        {
          "id": "civil-engineering-25-b",
          "option_text": "Hazen-Williams Formula",
          "is_correct": false
        },
        {
          "id": "civil-engineering-25-c",
          "option_text": "Poiseuille's Equation",
          "is_correct": false
        },
        {
          "id": "civil-engineering-25-d",
          "option_text": "Euler's Energy Equation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-26",
      "question_text": "In geotechnical slope stability analysis, which Swedish circle method divides the soil mass above a potential failure arc into vertical strips?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-26-a",
          "option_text": "Fellenius Method of Slices (Ordinary Method of Slices)",
          "is_correct": true
        },
        {
          "id": "civil-engineering-26-b",
          "option_text": "Terzaghi Bearing Capacity Equation",
          "is_correct": false
        },
        {
          "id": "civil-engineering-26-c",
          "option_text": "Rankine Wedge Method",
          "is_correct": false
        },
        {
          "id": "civil-engineering-26-d",
          "option_text": "Westergaard Elastic Solution",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-27",
      "question_text": "What is the purpose of curing concrete with moisture or ponding for at least 7 to 14 days after placement?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-27-a",
          "option_text": "Maintaining moisture to facilitate complete chemical hydration of Portland cement and strength development",
          "is_correct": true
        },
        {
          "id": "civil-engineering-27-b",
          "option_text": "Cooling down the building frame to prevent thermal shocks",
          "is_correct": false
        },
        {
          "id": "civil-engineering-27-c",
          "option_text": "Washing away surplus sand and fine aggregates",
          "is_correct": false
        },
        {
          "id": "civil-engineering-27-d",
          "option_text": "Softening the outer concrete surface for aesthetic polishing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-28",
      "question_text": "In transportation engineering, what geometric curve is provided between two tangent straights to counteract centrifugal force on high-speed vehicles?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-28-a",
          "option_text": "Superelevated Circular Curve with Spiral Transition Curves",
          "is_correct": true
        },
        {
          "id": "civil-engineering-28-b",
          "option_text": "Parabolic Crest Vertical Curve",
          "is_correct": false
        },
        {
          "id": "civil-engineering-28-c",
          "option_text": "Sag Curve with drainage inlets",
          "is_correct": false
        },
        {
          "id": "civil-engineering-28-d",
          "option_text": "Broken-back Reverse Curve",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-29",
      "question_text": "Which non-destructive testing (NDT) instrument measures the surface hardness of hardened concrete to estimate its in-situ compressive strength?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-29-a",
          "option_text": "Schmidt Rebound Hammer",
          "is_correct": true
        },
        {
          "id": "civil-engineering-29-b",
          "option_text": "Core Drilling Rig",
          "is_correct": false
        },
        {
          "id": "civil-engineering-29-c",
          "option_text": "Universal Testing Machine (UTM)",
          "is_correct": false
        },
        {
          "id": "civil-engineering-29-d",
          "option_text": "Hydraulic Pull-off Gauge",
          "is_correct": false
        }
      ]
    },
    {
      "id": "civil-engineering-30",
      "question_text": "In urban water supply treatment, what chemical coagulant is most widely added to raw water to destabilize colloidal turbidity particles?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "civil-engineering-30-a",
          "option_text": "Alum (Aluminum Sulfate)",
          "is_correct": true
        },
        {
          "id": "civil-engineering-30-b",
          "option_text": "Calcium Carbonate",
          "is_correct": false
        },
        {
          "id": "civil-engineering-30-c",
          "option_text": "Sodium Chloride",
          "is_correct": false
        },
        {
          "id": "civil-engineering-30-d",
          "option_text": "Activated Charcoal",
          "is_correct": false
        }
      ]
    }
  ],
  "electrical-engineering": [
    {
      "id": "electrical-engineering-1",
      "question_text": "What is the primary cause of core (iron) losses in an AC power transformer?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-1-a",
          "option_text": "Hysteresis loss and Eddy current loss in the magnetic laminations",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-1-b",
          "option_text": "Ohmic I^2*R resistance heating in copper windings",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-1-c",
          "option_text": "Dielectric breakdown of transformer mineral oil",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-1-d",
          "option_text": "Mechanical friction in the bushings",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-2",
      "question_text": "What formula determines the synchronous speed (N_s) of a three-phase AC induction motor with P poles operating at frequency f?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-2-a",
          "option_text": "N_s = 120 * f / P (RPM)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-2-b",
          "option_text": "N_s = 60 * f * P (RPM)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-2-c",
          "option_text": "N_s = f / (120 * P)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-2-d",
          "option_text": "N_s = P * f / 120",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-3",
      "question_text": "In AC circuit analysis, how does connecting a shunt capacitor bank to an inductive industrial load improve power system performance?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-3-a",
          "option_text": "Improves power factor toward unity and reduces lagging reactive power (kVAR) demand",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-3-b",
          "option_text": "Increases harmonic distortion across high-voltage lines",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-3-c",
          "option_text": "Converts alternating current directly into high-voltage direct current",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-3-d",
          "option_text": "Triples the fundamental line frequency",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-4",
      "question_text": "What phenomenon in high-voltage AC transmission lines causes current density to concentrate near the outer surface of conductors?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-4-a",
          "option_text": "Skin Effect",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-4-b",
          "option_text": "Proximity Effect",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-4-c",
          "option_text": "Corona Discharge",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-4-d",
          "option_text": "Ferranti Effect",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-5",
      "question_text": "Under no-load or light-load conditions on long EHV transmission lines, what effect causes the receiving-end voltage to exceed the sending-end voltage?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-5-a",
          "option_text": "Ferranti Effect",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-5-b",
          "option_text": "Skin Effect",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-5-c",
          "option_text": "Stroboscopic Effect",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-5-d",
          "option_text": "Hall Effect",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-6",
      "question_text": "What is the condition for electrical resonance in a series RLC alternating current circuit?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-6-a",
          "option_text": "Inductive reactance equals capacitive reactance (X_L = X_C)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-6-b",
          "option_text": "Total circuit impedance is infinite",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-6-c",
          "option_text": "Resistance R equals zero while voltage is lagging by 90 degrees",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-6-d",
          "option_text": "Current and voltage are in complete phase quadrature",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-7",
      "question_text": "According to Lenz's Law, what is the direction of an induced electromotive force (EMF) in a closed circuit?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-7-a",
          "option_text": "It always opposes the change in magnetic flux that produces it",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-7-b",
          "option_text": "It always reinforces the changing magnetic flux",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-7-c",
          "option_text": "It flows perpendicular to all electrostatic potential fields",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-7-d",
          "option_text": "It remains strictly constant regardless of magnetic field rate of change",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-8",
      "question_text": "Which high-voltage circuit breaker technology utilizes an inert, highly electronegative gas with outstanding arc-quenching properties?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-8-a",
          "option_text": "SF6 (Sulfur Hexafluoride) Circuit Breaker",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-8-b",
          "option_text": "Air-Blast Circuit Breaker",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-8-c",
          "option_text": "Bulk Oil Circuit Breaker",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-8-d",
          "option_text": "Carbon Dioxide Circuit Breaker",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-9",
      "question_text": "In an AC induction motor, what is 'slip' (s) defined as?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-9-a",
          "option_text": "s = (N_s - N_r) / N_s, where N_s is synchronous speed and N_r is rotor speed",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-9-b",
          "option_text": "s = N_r / N_s",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-9-c",
          "option_text": "s = N_s + N_r",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-9-d",
          "option_text": "s = 1 / (N_s - N_r)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-10",
      "question_text": "What is the relationship between line voltage (V_L) and phase voltage (V_ph) in a balanced three-phase Star (Wye) connected AC system?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-10-a",
          "option_text": "V_L = sqrt(3) * V_ph",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-10-b",
          "option_text": "V_L = V_ph",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-10-c",
          "option_text": "V_L = V_ph / sqrt(3)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-10-d",
          "option_text": "V_L = 3 * V_ph",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-11",
      "question_text": "In power system fault analysis, which type of short-circuit fault occurs most frequently on overhead high-voltage transmission lines?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-11-a",
          "option_text": "Single Line-to-Ground (L-G) Fault",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-11-b",
          "option_text": "Three-Phase Symmetrical (L-L-L) Fault",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-11-c",
          "option_text": "Line-to-Line (L-L) Fault",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-11-d",
          "option_text": "Double Line-to-Ground (L-L-G) Fault",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-12",
      "question_text": "What is the primary function of a Buchholz Relay in an oil-immersed power transformer?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-12-a",
          "option_text": "Detecting internal incipient electrical faults and gas accumulation inside the main transformer tank",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-12-b",
          "option_text": "Measuring secondary load current accurately",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-12-c",
          "option_text": "Cooling the external radiator fins with forced air",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-12-d",
          "option_text": "Regulating primary tap-changer voltages dynamically",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-13",
      "question_text": "What mathematical method is standardly used for analyzing unbalanced three-phase power system faults into positive, negative, and zero sequence components?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-13-a",
          "option_text": "Fortescue's Symmetrical Components Method",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-13-b",
          "option_text": "Fourier Transform Decomposition",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-13-c",
          "option_text": "Laplace Transform Integral",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-13-d",
          "option_text": "Bode Plot Stability Analysis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-14",
      "question_text": "In electrical machines, what is the purpose of laminating the stator and rotor iron cores?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-14-a",
          "option_text": "To minimize eddy current power losses by increasing electrical resistance between thin sheets",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-14-b",
          "option_text": "To increase the mechanical flexibility of the motor casing",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-14-c",
          "option_text": "To reduce the magnetic permeability of the air gap",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-14-d",
          "option_text": "To decrease the copper winding resistance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-15",
      "question_text": "Which DC motor speed control method allows operation above the rated base speed?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-15-a",
          "option_text": "Field Flux Weakening Control",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-15-b",
          "option_text": "Armature Resistance Control",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-15-c",
          "option_text": "Armature Voltage Reduction Control",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-15-d",
          "option_text": "Reverse Polarity Switching",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-16",
      "question_text": "What is the ideal input impedance and output impedance of an ideal operational amplifier (Op-Amp)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-16-a",
          "option_text": "Infinite Input Impedance (Z_in = infinity) and Zero Output Impedance (Z_out = 0)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-16-b",
          "option_text": "Zero Input Impedance and Infinite Output Impedance",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-16-c",
          "option_text": "50 Ohms Input Impedance and 50 Ohms Output Impedance",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-16-d",
          "option_text": "Equal reactive impedance at all frequencies",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-17",
      "question_text": "In an AC synchronous generator (alternator), what type of electrical excitation is supplied to the rotor field windings?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-17-a",
          "option_text": "Direct Current (DC)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-17-b",
          "option_text": "Three-Phase Alternating Current (AC)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-17-c",
          "option_text": "High-Frequency Radio Pulses",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-17-d",
          "option_text": "Square-wave AC with 50% duty cycle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-18",
      "question_text": "What safety protective device automatically trips an electrical circuit when it detects a differential leakage current escaping to earth ground?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-18-a",
          "option_text": "Residual Current Circuit Breaker (RCCB / GFCI)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-18-b",
          "option_text": "Thermal Overload Relay",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-18-c",
          "option_text": "Fast-acting Cartridge Fuse",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-18-d",
          "option_text": "Surge Arrester Varistor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-19",
      "question_text": "What theorem states that any linear active bilateral electrical network with two terminals can be replaced by an equivalent single voltage source in series with an impedance?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-19-a",
          "option_text": "Thevenin's Theorem",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-19-b",
          "option_text": "Norton's Theorem",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-19-c",
          "option_text": "Superposition Theorem",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-19-d",
          "option_text": "Maximum Power Transfer Theorem",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-20",
      "question_text": "What is the Maximum Power Transfer condition for a load connected to a linear DC source with internal resistance R_s?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-20-a",
          "option_text": "Load resistance equals source resistance (R_L = R_s)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-20-b",
          "option_text": "Load resistance is infinite (open circuit)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-20-c",
          "option_text": "Load resistance is zero (short circuit)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-20-d",
          "option_text": "Load resistance is double the source resistance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-21",
      "question_text": "In electric power transmission, what is the luminous violet glow and hissing sound caused by ionization of air surrounding high-voltage conductors?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-21-a",
          "option_text": "Corona Discharge",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-21-b",
          "option_text": "Skin Effect",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-21-c",
          "option_text": "Arc Flash",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-21-d",
          "option_text": "Eddy Current Luminescence",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-22",
      "question_text": "What type of power semiconductor device combines the simple gate-drive characteristics of MOSFETs with the high-current and low-saturation-voltage capability of bipolar transistors?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-22-a",
          "option_text": "Insulated-Gate Bipolar Transistor (IGBT)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-22-b",
          "option_text": "Silicon-Controlled Rectifier (SCR)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-22-c",
          "option_text": "Zener Diode",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-22-d",
          "option_text": "Schottky Barrier Diode",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-23",
      "question_text": "In solar photovoltaic (PV) power systems, what component converts variable direct current (DC) electricity into synchronized utility-grade alternating current (AC)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-23-a",
          "option_text": "Grid-Tied Solar Inverter",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-23-b",
          "option_text": "Buck-Boost DC Chopper",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-23-c",
          "option_text": "Analog Rectifier Bridge",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-23-d",
          "option_text": "Current Transformer (CT)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-24",
      "question_text": "What protective instrument is installed at substation overhead entries to divert high-voltage lightning and switching surges safely to ground?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-24-a",
          "option_text": "Surge Arrester (Lightning Arrester)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-24-b",
          "option_text": "Earth Disconnector Switch",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-24-c",
          "option_text": "Current Limiting Reactor",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-24-d",
          "option_text": "Potential Transformer (PT)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-25",
      "question_text": "In power engineering, what is the per-unit (p.u.) system used for?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-25-a",
          "option_text": "Simplifying complex network calculations by normalizing voltages, currents, and impedances to a common base",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-25-b",
          "option_text": "Calculating electrical tariffs for retail residential consumers",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-25-c",
          "option_text": "Measuring mechanical vibrations in turbine bearings",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-25-d",
          "option_text": "Standardizing the physical dimensions of motor casings",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-26",
      "question_text": "Which motor type has its rotor speed strictly synchronized with the rotating magnetic field of the stator at all operating loads?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-26-a",
          "option_text": "Synchronous Motor",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-26-b",
          "option_text": "Squirrel-Cage Induction Motor",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-26-c",
          "option_text": "Universal Series Motor",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-26-d",
          "option_text": "Shaded-Pole Induction Motor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-27",
      "question_text": "What is the active power (P) in a balanced three-phase AC circuit with line voltage V_L, line current I_L, and power factor angle theta?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-27-a",
          "option_text": "P = sqrt(3) * V_L * I_L * cos(theta)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-27-b",
          "option_text": "P = 3 * V_L * I_L * sin(theta)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-27-c",
          "option_text": "P = V_L * I_L * cos(theta)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-27-d",
          "option_text": "P = sqrt(2) * V_L * I_L",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-28",
      "question_text": "What starting method is standardly used for medium-to-large three-phase induction motors to reduce inrush starting current without adding external resistance?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-28-a",
          "option_text": "Star-Delta (Wye-Delta) Starter or Soft Starter",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-28-b",
          "option_text": "Direct-On-Line (DOL) Full Voltage Starting",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-28-c",
          "option_text": "DC Injection Braking",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-28-d",
          "option_text": "Series Capacitive Starter",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-29",
      "question_text": "What instrument transformer is specifically designed to step down high line currents safely for measurement by standard 5A ammeters and protective relays?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-29-a",
          "option_text": "Current Transformer (CT)",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-29-b",
          "option_text": "Potential Transformer (PT)",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-29-c",
          "option_text": "Autotransformer",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-29-d",
          "option_text": "Isolation Transformer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "electrical-engineering-30",
      "question_text": "Which law mathematically states that the line integral of magnetic field intensity around any closed loop equals the total enclosed electric current?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "electrical-engineering-30-a",
          "option_text": "Ampere's Circuital Law",
          "is_correct": true
        },
        {
          "id": "electrical-engineering-30-b",
          "option_text": "Gauss's Law for Magnetism",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-30-c",
          "option_text": "Coulomb's Inverse Square Law",
          "is_correct": false
        },
        {
          "id": "electrical-engineering-30-d",
          "option_text": "Biot-Savart Law",
          "is_correct": false
        }
      ]
    }
  ],
  "film-production": [
    {
      "id": "film-production-1",
      "question_text": "In cinematography, what fundamental rule governs camera shutter speed relative to frame rate (e.g., shooting at 24 fps with a 1/48s shutter) to achieve natural motion blur resembling human visual perception?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-1-a",
          "option_text": "The 180-Degree Shutter Rule",
          "is_correct": true
        },
        {
          "id": "film-production-1-b",
          "option_text": "The Rule of Thirds camera grid",
          "is_correct": false
        },
        {
          "id": "film-production-1-c",
          "option_text": "The Inverse-Square Law of lighting decay",
          "is_correct": false
        },
        {
          "id": "film-production-1-d",
          "option_text": "The Rec. 709 dynamic range compression ratio",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-2",
      "question_text": "In classic motion picture lighting setups, what is the primary purpose of the \"Key Light\" in three-point lighting?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-2-a",
          "option_text": "To establish the primary illumination, directionality, and mood on the subject’s face and figure",
          "is_correct": true
        },
        {
          "id": "film-production-2-b",
          "option_text": "To soften deep shadows cast by the sun without altering exposure",
          "is_correct": false
        },
        {
          "id": "film-production-2-c",
          "option_text": "To separate the subject from the dark background with an edge rim glow",
          "is_correct": false
        },
        {
          "id": "film-production-2-d",
          "option_text": "To evenly illuminate the greenscreen backdrop to prevent color spill",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-3",
      "question_text": "In cinematic editing and camera placement, what spatial guideline states that cameras must remain on one side of an imaginary line between two characters to preserve screen direction and eyelines?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-3-a",
          "option_text": "The 180-Degree Spatial Axis Rule",
          "is_correct": true
        },
        {
          "id": "film-production-3-b",
          "option_text": "The 30-Degree Cut Angle Rule",
          "is_correct": false
        },
        {
          "id": "film-production-3-c",
          "option_text": "The Jump Cut Discontinuity Protocol",
          "is_correct": false
        },
        {
          "id": "film-production-3-d",
          "option_text": "The Kuleshov Effect sequencing rule",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-4",
      "question_text": "Which optical lens characteristic determines the depth of field and background bokeh blur at a given focal length and camera-to-subject distance?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-4-a",
          "option_text": "Lens aperture (f-stop / T-stop setting)",
          "is_correct": true
        },
        {
          "id": "film-production-4-b",
          "option_text": "Front filter thread diameter (e.g., 82mm)",
          "is_correct": false
        },
        {
          "id": "film-production-4-c",
          "option_text": "Lens mount flange focal depth distance",
          "is_correct": false
        },
        {
          "id": "film-production-4-d",
          "option_text": "Zoom barrel rotation torque resistance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-5",
      "question_text": "In professional digital cinema cameras (like ARRI Alexa or RED), what is the primary advantage of recording in a \"Log\" gamma profile (e.g., LogC, S-Log3, RED Log3G10)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-5-a",
          "option_text": "Preserves maximum dynamic range in highlights and shadow details for flexible color grading in post-production",
          "is_correct": true
        },
        {
          "id": "film-production-5-b",
          "option_text": "Permanently burns a finalized color look directly into video files to save render time",
          "is_correct": false
        },
        {
          "id": "film-production-5-c",
          "option_text": "Doubles the audio sample rate recorded on internal microphones",
          "is_correct": false
        },
        {
          "id": "film-production-5-d",
          "option_text": "Automatically stabilizes handheld camera camera shake without optical gimbal",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-6",
      "question_text": "In location sound recording, what microphone polar pattern provides tight directional pickup along the front axis while rejecting ambient sounds from the sides and rear, ideal for boom pole operation?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-6-a",
          "option_text": "Supercardioid / Hypercardioid (Shotgun pattern with interference tube)",
          "is_correct": true
        },
        {
          "id": "film-production-6-b",
          "option_text": "Omnidirectional boundary pattern",
          "is_correct": false
        },
        {
          "id": "film-production-6-c",
          "option_text": "Figure-8 bidirectional ribbon pattern",
          "is_correct": false
        },
        {
          "id": "film-production-6-d",
          "option_text": "Cardioid wide-angle cardioid lavalier",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-7",
      "question_text": "In film post-production sound design, what is the custom recording of synchronized human footsteps, cloth rustles, and prop interactions to replace production audio called?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-7-a",
          "option_text": "Foley Recording",
          "is_correct": true
        },
        {
          "id": "film-production-7-b",
          "option_text": "Automated Dialogue Replacement (ADR / Looping)",
          "is_correct": false
        },
        {
          "id": "film-production-7-c",
          "option_text": "Diegetic orchestral score scoring",
          "is_correct": false
        },
        {
          "id": "film-production-7-d",
          "option_text": "Room tone baseline ambiance recording",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-8",
      "question_text": "What visual narrative device is created by cutting from one scene to another where the two consecutive shots share identical geometric compositions, motion directions, or shapes?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-8-a",
          "option_text": "Match Cut (Graphic or Action match cut)",
          "is_correct": true
        },
        {
          "id": "film-production-8-b",
          "option_text": "Smash cut on audio peak",
          "is_correct": false
        },
        {
          "id": "film-production-8-c",
          "option_text": "L-Cut / J-Cut split audio transition",
          "is_correct": false
        },
        {
          "id": "film-production-8-d",
          "option_text": "Wipe transition with alpha mask",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-9",
      "question_text": "On a professional film set, which department head is responsible for rigging lighting instruments, camera cranes, dollies, flags, and physical camera support equipment?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-9-a",
          "option_text": "Key Grip",
          "is_correct": true
        },
        {
          "id": "film-production-9-b",
          "option_text": "Gaffer (Chief Lighting Technician)",
          "is_correct": false
        },
        {
          "id": "film-production-9-c",
          "option_text": "First Assistant Director (1st AD)",
          "is_correct": false
        },
        {
          "id": "film-production-9-d",
          "option_text": "Production Sound Mixer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-10",
      "question_text": "In digital color grading and mastering, what is a 3D LUT (Look-Up Table) primarily used for?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "film-production-10-a",
          "option_text": "Mapping input color values (RGB) from a camera Log space to a standardized display color space (such as Rec.709) with a specific creative palette",
          "is_correct": true
        },
        {
          "id": "film-production-10-b",
          "option_text": "Automatically removing microphone hum and background air conditioning noise",
          "is_correct": false
        },
        {
          "id": "film-production-10-c",
          "option_text": "Re-timing the speed of slow-motion clips from 120 fps to 24 fps",
          "is_correct": false
        },
        {
          "id": "film-production-10-d",
          "option_text": "Generating digital visual effects particle simulations",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-11",
      "question_text": "In professional cinematography, what optical difference distinguishes anamorphic lenses from standard spherical lenses?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-11-a",
          "option_text": "Anamorphic lenses optically compress wide fields of view with a 2x squeeze, producing oval bokeh and horizontal flares",
          "is_correct": true
        },
        {
          "id": "film-production-11-b",
          "option_text": "Anamorphic lenses require zero focusing adjustments at any focal distance",
          "is_correct": false
        },
        {
          "id": "film-production-11-c",
          "option_text": "Anamorphic lenses can only capture black-and-white monochrome imagery",
          "is_correct": false
        },
        {
          "id": "film-production-11-d",
          "option_text": "Anamorphic lenses eliminate the need for digital camera image sensors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-12",
      "question_text": "In multi-camera and dual-system sound production, what protocol synchronizes audio recorders and cameras with continuous frame-accurate time metadata?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-12-a",
          "option_text": "SMPTE Linear Timecode (LTC) and Genlock synchronization",
          "is_correct": true
        },
        {
          "id": "film-production-12-b",
          "option_text": "Consumer Bluetooth audio pairing",
          "is_correct": false
        },
        {
          "id": "film-production-12-c",
          "option_text": "Analog frequency modulation broadcast carrier",
          "is_correct": false
        },
        {
          "id": "film-production-12-d",
          "option_text": "Manual stopwatch hand signaling",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-13",
      "question_text": "In digital cinema workflows, which color gamut represents the widest color space standardized by ITU for ultra-high-definition television?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-13-a",
          "option_text": "ITU-R BT.2020 (Rec. 2020)",
          "is_correct": true
        },
        {
          "id": "film-production-13-b",
          "option_text": "Standard sRGB (Rec. 709)",
          "is_correct": false
        },
        {
          "id": "film-production-13-c",
          "option_text": "DCI-P3 theatrical cinema space",
          "is_correct": false
        },
        {
          "id": "film-production-13-d",
          "option_text": "Adobe RGB (1998) print gamut",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-14",
      "question_text": "What is the industry-standard professional digital audio sampling rate used for synchronous sound recording in motion picture production?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-14-a",
          "option_text": "48 kHz at 24-bit depth",
          "is_correct": true
        },
        {
          "id": "film-production-14-b",
          "option_text": "44.1 kHz at 16-bit depth (Red Book CD)",
          "is_correct": false
        },
        {
          "id": "film-production-14-c",
          "option_text": "22.05 kHz at 8-bit depth",
          "is_correct": false
        },
        {
          "id": "film-production-14-d",
          "option_text": "96 kHz at 1-bit Delta-Sigma depth",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-15",
      "question_text": "How does reducing the camera shutter angle from 180 degrees to 45 degrees alter the visual appearance of high-speed action sequences?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-15-a",
          "option_text": "Produces sharp, staccato, jittery motion with virtually zero motion blur",
          "is_correct": true
        },
        {
          "id": "film-production-15-b",
          "option_text": "Creates extreme motion blur with smooth dreamlike trails",
          "is_correct": false
        },
        {
          "id": "film-production-15-c",
          "option_text": "Inverts image color channels into negative space",
          "is_correct": false
        },
        {
          "id": "film-production-15-d",
          "option_text": "Slows down playback speed by 400%",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-16",
      "question_text": "In high-contrast chiaroscuro or film noir cinematography, what key-to-fill lighting ratio is typically employed?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-16-a",
          "option_text": "8:1 or higher (producing deep, dramatic shadow separation)",
          "is_correct": true
        },
        {
          "id": "film-production-16-b",
          "option_text": "1:1 flat lighting ratio",
          "is_correct": false
        },
        {
          "id": "film-production-16-c",
          "option_text": "2:1 standard sitcom interview ratio",
          "is_correct": false
        },
        {
          "id": "film-production-16-d",
          "option_text": "0.5:1 where fill light is twice as bright as key light",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-17",
      "question_text": "What image sensor artifact occurs on CMOS rolling-shutter cameras during rapid whip-pans or propeller rotations?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-17-a",
          "option_text": "Rolling shutter skew / Jello effect distortion",
          "is_correct": true
        },
        {
          "id": "film-production-17-b",
          "option_text": "Pixel blooming and charge leakage across lines",
          "is_correct": false
        },
        {
          "id": "film-production-17-c",
          "option_text": "Optical diffraction fringing along edge highlights",
          "is_correct": false
        },
        {
          "id": "film-production-17-d",
          "option_text": "Automatic focal plane inversion",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-18",
      "question_text": "In professional grip and rigging on set, what safety rule governs the proper loading direction of a C-stand grip head (knuckle)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-18-a",
          "option_text": "Right-hand rule: the load must be rigged on the right side so downward gravitational torque tightens the knuckle",
          "is_correct": true
        },
        {
          "id": "film-production-18-b",
          "option_text": "The knuckle handle must always point downward toward the floor",
          "is_correct": false
        },
        {
          "id": "film-production-18-c",
          "option_text": "Loads must only be balanced on the shortest base leg without sandbags",
          "is_correct": false
        },
        {
          "id": "film-production-18-d",
          "option_text": "Arms must be extended to maximum reach without tightening the T-handle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-19",
      "question_text": "In cinematic camera lenses, what optical property distinguishes a true cinema zoom from a photographic zoom lens?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-19-a",
          "option_text": "Parfocal design that maintains critical focal distance throughout the entire zoom range without breathing",
          "is_correct": true
        },
        {
          "id": "film-production-19-b",
          "option_text": "Inability to manually adjust focus rings during recording",
          "is_correct": false
        },
        {
          "id": "film-production-19-c",
          "option_text": "Plastic aperture rings without gear pitch teeth",
          "is_correct": false
        },
        {
          "id": "film-production-19-d",
          "option_text": "Fixed focal length that cannot change magnification",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-20",
      "question_text": "In high-end film production lighting, what metric evaluates light source color fidelity specifically optimized for television and digital cinema sensors?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "film-production-20-a",
          "option_text": "Television Lighting Consistency Index (TLCI)",
          "is_correct": true
        },
        {
          "id": "film-production-20-b",
          "option_text": "Color Temperature (Kelvin scale only)",
          "is_correct": false
        },
        {
          "id": "film-production-20-c",
          "option_text": "Luminous flux measured in raw lumens",
          "is_correct": false
        },
        {
          "id": "film-production-20-d",
          "option_text": "Incandescent bulb wattage rating",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-21",
      "question_text": "What theatrical widescreen aspect ratio is the DCI Scope standard for epic feature films?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-21-a",
          "option_text": "2.39:1 (Scope)",
          "is_correct": true
        },
        {
          "id": "film-production-21-b",
          "option_text": "1.85:1 (Flat)",
          "is_correct": false
        },
        {
          "id": "film-production-21-c",
          "option_text": "1.33:1 (Academy 4:3)",
          "is_correct": false
        },
        {
          "id": "film-production-21-d",
          "option_text": "1.78:1 (16:9 HD)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-22",
      "question_text": "In directional microphone acoustics, what physical phenomenon causes directional microphones (like cardiods and shotguns) to artificially boost low frequencies as they approach a speaker's mouth?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-22-a",
          "option_text": "Proximity Effect",
          "is_correct": true
        },
        {
          "id": "film-production-22-b",
          "option_text": "Haas Precedence Effect",
          "is_correct": false
        },
        {
          "id": "film-production-22-c",
          "option_text": "Doppler Frequency Shift",
          "is_correct": false
        },
        {
          "id": "film-production-22-d",
          "option_text": "Inverse-Square Acoustic Reflection",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-23",
      "question_text": "When calculating depth of field in cinematography, what optical distance setting yields acceptable sharpness from half that distance all the way to infinity?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-23-a",
          "option_text": "Hyperfocal Distance",
          "is_correct": true
        },
        {
          "id": "film-production-23-b",
          "option_text": "Focal Flange Collimation Distance",
          "is_correct": false
        },
        {
          "id": "film-production-23-c",
          "option_text": "Minimum Focus Distance (MOD)",
          "is_correct": false
        },
        {
          "id": "film-production-23-d",
          "option_text": "Optical Nodal Point Axis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-24",
      "question_text": "In offline/online post-production workflows, what lightweight, low-bitrate video files are used during creative editing before final conform and color grading?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-24-a",
          "option_text": "Proxy Media (e.g., ProRes Proxy or DNxHR LB)",
          "is_correct": true
        },
        {
          "id": "film-production-24-b",
          "option_text": "Uncompressed 16-bit DPX master image sequences",
          "is_correct": false
        },
        {
          "id": "film-production-24-c",
          "option_text": "4K RAW Bayer sensor dumps",
          "is_correct": false
        },
        {
          "id": "film-production-24-d",
          "option_text": "HEVC H.265 distribution streams",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-25",
      "question_text": "Which camera stabilization system isolates camera movement using a mechanical counterweighted sled, articulated arm, and operator vest?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-25-a",
          "option_text": "Steadicam mechanical stabilizer",
          "is_correct": true
        },
        {
          "id": "film-production-25-b",
          "option_text": "Electronic motorized 3-axis brushless gimbal",
          "is_correct": false
        },
        {
          "id": "film-production-25-c",
          "option_text": "Optical image stabilization (OIS) inside the lens barrel",
          "is_correct": false
        },
        {
          "id": "film-production-25-d",
          "option_text": "Electronic digital sensor crop stabilization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-26",
      "question_text": "When filming in bright sunlight with a wide aperture (e.g., f/1.4 or T1.5) to achieve shallow depth of field, what optical filter reduces exposure without altering color balance?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-26-a",
          "option_text": "Neutral Density (ND) filter",
          "is_correct": true
        },
        {
          "id": "film-production-26-b",
          "option_text": "Linear polarizing filter",
          "is_correct": false
        },
        {
          "id": "film-production-26-c",
          "option_text": "80A daylight-to-tungsten cooling filter",
          "is_correct": false
        },
        {
          "id": "film-production-26-d",
          "option_text": "UV haze cut-off filter",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-27",
      "question_text": "In visual effects (VFX) plate photography, what color subsampling standard is required to preserve sharp matte edges during green-screen chroma keying?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-27-a",
          "option_text": "4:2:2 or 4:4:4 uncompressed chroma subsampling",
          "is_correct": true
        },
        {
          "id": "film-production-27-b",
          "option_text": "4:2:0 consumer compression subsampling",
          "is_correct": false
        },
        {
          "id": "film-production-27-c",
          "option_text": "4:1:1 NTSC legacy video subsampling",
          "is_correct": false
        },
        {
          "id": "film-production-27-d",
          "option_text": "1:0:0 luminance-only grayscale sampling",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-28",
      "question_text": "In script supervision and visual continuity, what imaginary line between two characters must the camera never cross to maintain consistent screen direction?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-28-a",
          "option_text": "The 180-Degree Line (Axis of Action)",
          "is_correct": true
        },
        {
          "id": "film-production-28-b",
          "option_text": "The 30-degree focal cutoff boundary",
          "is_correct": false
        },
        {
          "id": "film-production-28-c",
          "option_text": "The horizon level line",
          "is_correct": false
        },
        {
          "id": "film-production-28-d",
          "option_text": "The blocking focal mark",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-29",
      "question_text": "In high-efficiency cinema lighting, what high-intensity discharge lamp produces daylight-balanced 5600K light with very high luminous efficacy per watt?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-29-a",
          "option_text": "HMI (Hydrargyrum Medium-arc Iodide) light",
          "is_correct": true
        },
        {
          "id": "film-production-29-b",
          "option_text": "Standard Tungsten-Halogen filament bulb",
          "is_correct": false
        },
        {
          "id": "film-production-29-c",
          "option_text": "Low-pressure sodium vapor street lamp",
          "is_correct": false
        },
        {
          "id": "film-production-29-d",
          "option_text": "Mercury vapor industrial tube",
          "is_correct": false
        }
      ]
    },
    {
      "id": "film-production-30",
      "question_text": "In modern cinema sound design, which multichannel immersive format incorporates 3D height speaker channels and audio objects positioned in spatial coordinate space?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "film-production-30-a",
          "option_text": "Dolby Atmos / DTS:X object-based spatial audio",
          "is_correct": true
        },
        {
          "id": "film-production-30-b",
          "option_text": "Standard 5.1 channel surround sound",
          "is_correct": false
        },
        {
          "id": "film-production-30-c",
          "option_text": "2.0 stereo matrix encoding",
          "is_correct": false
        },
        {
          "id": "film-production-30-d",
          "option_text": "Binaural dummy-head mono mix",
          "is_correct": false
        }
      ]
    }
  ],
  "interior-design": [
    {
      "id": "interior-design-1",
      "question_text": "In architectural interior design, what metric defines the human body measurement standards used to ensure appropriate countertop heights, door clearances, and chair seat ergonomics?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-1-a",
          "option_text": "Anthropometrics",
          "is_correct": true
        },
        {
          "id": "interior-design-1-b",
          "option_text": "Biomechanics of sports kinetics",
          "is_correct": false
        },
        {
          "id": "interior-design-1-c",
          "option_text": "Acoustical reverberation metrics",
          "is_correct": false
        },
        {
          "id": "interior-design-1-d",
          "option_text": "Photometric beam dispersion angles",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-2",
      "question_text": "In commercial building codes (IBC & NFPA 101 Life Safety Code), what is the minimum standard clear width requirement for an accessible interior means of egress corridor serving more than 50 occupants?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-2-a",
          "option_text": "44 inches (1118 mm)",
          "is_correct": true
        },
        {
          "id": "interior-design-2-b",
          "option_text": "32 inches (813 mm)",
          "is_correct": false
        },
        {
          "id": "interior-design-2-c",
          "option_text": "24 inches (610 mm)",
          "is_correct": false
        },
        {
          "id": "interior-design-2-d",
          "option_text": "60 inches (1524 mm)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-3",
      "question_text": "In lighting design for corporate interior offices, what Correlated Color Temperature (CCT) range is recommended for promoting alertness and visual acuity in task workspaces?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-3-a",
          "option_text": "3500K to 4500K (Neutral to Cool White)",
          "is_correct": true
        },
        {
          "id": "interior-design-3-b",
          "option_text": "2200K to 2700K (Warm candlelight glow)",
          "is_correct": false
        },
        {
          "id": "interior-design-3-c",
          "option_text": "6500K to 7500K (Daylight blue exterior sky)",
          "is_correct": false
        },
        {
          "id": "interior-design-3-d",
          "option_text": "1800K to 2000K (Sodium vapor amber)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-4",
      "question_text": "What acoustical performance rating measures the percentage of airborne sound absorbed by an interior ceiling tile or wall acoustic panel (ranging from 0.00 to 1.00)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-4-a",
          "option_text": "Noise Reduction Coefficient (NRC)",
          "is_correct": true
        },
        {
          "id": "interior-design-4-b",
          "option_text": "Sound Transmission Class (STC)",
          "is_correct": false
        },
        {
          "id": "interior-design-4-c",
          "option_text": "Impact Insulation Class (IIC)",
          "is_correct": false
        },
        {
          "id": "interior-design-4-d",
          "option_text": "Ceiling Attenuation Class (CAC)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-5",
      "question_text": "In interior commercial flooring specification, what test metric measures the slip resistance of ceramic tiles under wet conditions to prevent occupant falls (ANSI A326.3)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-5-a",
          "option_text": "Dynamic Coefficient of Friction (DCOF, minimum standard >= 0.42 for level wet floors)",
          "is_correct": true
        },
        {
          "id": "interior-design-5-b",
          "option_text": "Mohs Hardness Scratch Scale rating",
          "is_correct": false
        },
        {
          "id": "interior-design-5-c",
          "option_text": "Static indentation residual deformation rating",
          "is_correct": false
        },
        {
          "id": "interior-design-5-d",
          "option_text": "Taber Abrasion wear cycle count",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-6",
      "question_text": "In residential interior kitchen design, what classic planning principle minimizes walking distances between the sink, cooktop/range, and refrigerator?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-6-a",
          "option_text": "The Kitchen Work Triangle (total perimeter between 13 and 26 feet)",
          "is_correct": true
        },
        {
          "id": "interior-design-6-b",
          "option_text": "The Linear Galley Corridor layout",
          "is_correct": false
        },
        {
          "id": "interior-design-6-c",
          "option_text": "The Golden Ratio Sectional distribution",
          "is_correct": false
        },
        {
          "id": "interior-design-6-d",
          "option_text": "The Feng Shui Bagua map orientation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-7",
      "question_text": "What flame spread classification under ASTM E84 / NFPA 255 is mandatory for interior wall and ceiling finish materials in high-risk commercial egress corridors (Flame Spread Index 0-25)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-7-a",
          "option_text": "Class A (Class I)",
          "is_correct": true
        },
        {
          "id": "interior-design-7-b",
          "option_text": "Class B (Class II)",
          "is_correct": false
        },
        {
          "id": "interior-design-7-c",
          "option_text": "Class C (Class III)",
          "is_correct": false
        },
        {
          "id": "interior-design-7-d",
          "option_text": "Class D (Unregulated combustible finish)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-8",
      "question_text": "What design framework ensures interior built environments are usable by all people to the greatest extent possible, regardless of age, disability, or mobility limitations?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-8-a",
          "option_text": "Universal Design (Principles of Accessibility and ADA Standards)",
          "is_correct": true
        },
        {
          "id": "interior-design-8-b",
          "option_text": "Minimalist Industrial Aestheticism",
          "is_correct": false
        },
        {
          "id": "interior-design-8-c",
          "option_text": "Brutalist Monolithic Architecture",
          "is_correct": false
        },
        {
          "id": "interior-design-8-d",
          "option_text": "Historical Art Deco Preservation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-9",
      "question_text": "In interior millwork and custom cabinetry, which composite wood substrate provides the smoothest, most uniform surface for high-gloss lacquer and painted cabinetry finishes?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-9-a",
          "option_text": "Medium Density Fiberboard (MDF)",
          "is_correct": true
        },
        {
          "id": "interior-design-9-b",
          "option_text": "Oriented Strand Board (OSB)",
          "is_correct": false
        },
        {
          "id": "interior-design-9-c",
          "option_text": "Rotary-cut spruce construction plywood",
          "is_correct": false
        },
        {
          "id": "interior-design-9-d",
          "option_text": "Rough sawn dimensional Douglas fir lumber",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-10",
      "question_text": "In sustainable interior finishes, what indoor environmental quality certification verifies that paints, sealants, and furnishings emit ultra-low or zero volatile organic compounds (VOCs)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-10-a",
          "option_text": "GREENGUARD Gold Certification or Cradle to Cradle",
          "is_correct": true
        },
        {
          "id": "interior-design-10-b",
          "option_text": "Energy Star Appliance rating",
          "is_correct": false
        },
        {
          "id": "interior-design-10-c",
          "option_text": "WaterSense plumbing certification",
          "is_correct": false
        },
        {
          "id": "interior-design-10-d",
          "option_text": "FSC Chain of Custody for lumber harvesting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-11",
      "question_text": "In residential and commercial kitchen design, what planning concept states that the sum of the distances between the sink, cooktop, and refrigerator should measure between 12 and 26 feet?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-11-a",
          "option_text": "The Kitchen Work Triangle",
          "is_correct": true
        },
        {
          "id": "interior-design-11-b",
          "option_text": "The Ergonomic Perimeter Standard",
          "is_correct": false
        },
        {
          "id": "interior-design-11-c",
          "option_text": "The ADA Countertop Radius",
          "is_correct": false
        },
        {
          "id": "interior-design-11-d",
          "option_text": "The Galley Circulation Index",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-12",
      "question_text": "Under the Americans with Disabilities Act (ADA) Standards for Accessible Design, what is the minimum turning clear space diameter required for wheelchair maneuverability?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-12-a",
          "option_text": "60 inches (1525 mm) circular turning diameter",
          "is_correct": true
        },
        {
          "id": "interior-design-12-b",
          "option_text": "36 inches (915 mm) narrow corridor width",
          "is_correct": false
        },
        {
          "id": "interior-design-12-c",
          "option_text": "48 inches (1220 mm) straight clearance",
          "is_correct": false
        },
        {
          "id": "interior-design-12-d",
          "option_text": "72 inches (1830 mm) full span dimension",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-13",
      "question_text": "In architectural interior lighting calculations, what unit measures the total illuminance delivered on a working surface per unit area in SI units?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-13-a",
          "option_text": "Lux (lumens per square meter)",
          "is_correct": true
        },
        {
          "id": "interior-design-13-b",
          "option_text": "Candela (luminous intensity)",
          "is_correct": false
        },
        {
          "id": "interior-design-13-c",
          "option_text": "Foot-candle (lumens per square foot)",
          "is_correct": false
        },
        {
          "id": "interior-design-13-d",
          "option_text": "Lumen (total luminous flux output)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-14",
      "question_text": "According to ASTM E84 (Standard Test Method for Surface Burning Characteristics of Building Materials), what classification is assigned to interior wall finishes with a Flame Spread Index of 0 to 25?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-14-a",
          "option_text": "Class A (Class I)",
          "is_correct": true
        },
        {
          "id": "interior-design-14-b",
          "option_text": "Class B (Class II)",
          "is_correct": false
        },
        {
          "id": "interior-design-14-c",
          "option_text": "Class C (Class III)",
          "is_correct": false
        },
        {
          "id": "interior-design-14-d",
          "option_text": "Class D non-rated",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-15",
      "question_text": "In sustainable commercial interior design (LEED v4), what volatile organic compound category must be strictly minimized in adhesives, sealants, paints, and composite wood?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-15-a",
          "option_text": "VOC (Volatile Organic Compounds) emissions",
          "is_correct": true
        },
        {
          "id": "interior-design-15-b",
          "option_text": "Noble gas atmospheric particulates",
          "is_correct": false
        },
        {
          "id": "interior-design-15-c",
          "option_text": "Mineralized silica crystal dust",
          "is_correct": false
        },
        {
          "id": "interior-design-15-d",
          "option_text": "Natural cellulose moisture vapor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-16",
      "question_text": "In upholstery and commercial contract textile specifications, what standard abrasion test measures the durability of fabric using back-and-forth wire screen or cotton duck rubs?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-16-a",
          "option_text": "Wyzenbeek Abrasion Test (Double Rubs)",
          "is_correct": true
        },
        {
          "id": "interior-design-16-b",
          "option_text": "Munsell Chroma Saturation Test",
          "is_correct": false
        },
        {
          "id": "interior-design-16-c",
          "option_text": "Knoop Microhardness Indentation Test",
          "is_correct": false
        },
        {
          "id": "interior-design-16-d",
          "option_text": "ASTM D1003 Haze and Luminous Transmittance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-17",
      "question_text": "In commercial interior construction sets, which architectural drawing provides an orthographic projection of the ceiling layout, showing lighting fixtures, HVAC diffusers, and sprinkler heads?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-17-a",
          "option_text": "Reflected Ceiling Plan (RCP)",
          "is_correct": true
        },
        {
          "id": "interior-design-17-b",
          "option_text": "Horizontal structural floor framing plan",
          "is_correct": false
        },
        {
          "id": "interior-design-17-c",
          "option_text": "Exterior elevation detail",
          "is_correct": false
        },
        {
          "id": "interior-design-17-d",
          "option_text": "Subfloor plumbing riser schematic",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-18",
      "question_text": "In color science used by interior architects, what color system defines any given hue by three coordinates: Hue, Value (lightness), and Chroma (purity/saturation)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-18-a",
          "option_text": "The Munsell Color System",
          "is_correct": true
        },
        {
          "id": "interior-design-18-b",
          "option_text": "The CMYK subtractive ink process",
          "is_correct": false
        },
        {
          "id": "interior-design-18-c",
          "option_text": "The CIE XYZ 1931 coordinate gamut",
          "is_correct": false
        },
        {
          "id": "interior-design-18-d",
          "option_text": "The NCS Natural Colour System only",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-19",
      "question_text": "In architectural millwork and custom cabinetry, which recognized industry standard manual specifies fabrication tolerances and premium/custom execution grades?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-19-a",
          "option_text": "AWI (Architectural Woodwork Institute) Architectural Woodwork Standards (AWS)",
          "is_correct": true
        },
        {
          "id": "interior-design-19-b",
          "option_text": "AISC Steel Construction Manual",
          "is_correct": false
        },
        {
          "id": "interior-design-19-c",
          "option_text": "ACI 318 Concrete Building Code",
          "is_correct": false
        },
        {
          "id": "interior-design-19-d",
          "option_text": "ASME Boiler and Pressure Vessel Code",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-20",
      "question_text": "In dining space planning, what is the minimum clearance distance recommended between the edge of a dining table and the nearest wall or obstacle to permit an occupant to push back their chair and stand?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-20-a",
          "option_text": "36 inches (915 mm) minimum (44 inches for clear passage)",
          "is_correct": true
        },
        {
          "id": "interior-design-20-b",
          "option_text": "24 inches (610 mm) tight fit",
          "is_correct": false
        },
        {
          "id": "interior-design-20-c",
          "option_text": "18 inches (455 mm) compressed space",
          "is_correct": false
        },
        {
          "id": "interior-design-20-d",
          "option_text": "54 inches (1370 mm) oversized clearance",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-21",
      "question_text": "In biophilic interior design and daylighting strategy, what architectural shading feature regulates glare while bouncing natural daylight deeper into the interior ceiling plenum?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-21-a",
          "option_text": "Interior / exterior Daylight Light Shelf",
          "is_correct": true
        },
        {
          "id": "interior-design-21-b",
          "option_text": "Blackout motorized roller shades",
          "is_correct": false
        },
        {
          "id": "interior-design-21-c",
          "option_text": "Solid acoustic barrier partition",
          "is_correct": false
        },
        {
          "id": "interior-design-21-d",
          "option_text": "Opaque glass transom spandrel",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-22",
      "question_text": "In commercial high-traffic flooring, what durable composite material is made of marble, granite, or quartz chips poured in an epoxy or cementitious matrix and ground flat and polished?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-22-a",
          "option_text": "Terrazzo Flooring",
          "is_correct": true
        },
        {
          "id": "interior-design-22-b",
          "option_text": "Engineered hardwood floating floor",
          "is_correct": false
        },
        {
          "id": "interior-design-22-c",
          "option_text": "Homogeneous luxury vinyl tile (LVT)",
          "is_correct": false
        },
        {
          "id": "interior-design-22-d",
          "option_text": "Vitrified glazed wall porcelain",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-23",
      "question_text": "In contract interior specification, what document itemizes all Furniture, Fixtures, and Equipment (FF&E) with manufacturer names, model numbers, finish codes, and quantities?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-23-a",
          "option_text": "FF&E Specification Schedule",
          "is_correct": true
        },
        {
          "id": "interior-design-23-b",
          "option_text": "Bill of Lading shipping manifest",
          "is_correct": false
        },
        {
          "id": "interior-design-23-c",
          "option_text": "Geotechnical soil boring report",
          "is_correct": false
        },
        {
          "id": "interior-design-23-d",
          "option_text": "Building permit inspection card",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-24",
      "question_text": "What metric measures the effectiveness of an interior partition wall in reducing airborne sound transmission between adjacent hotel guestrooms or private executive offices?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-24-a",
          "option_text": "Sound Transmission Class (STC rating)",
          "is_correct": true
        },
        {
          "id": "interior-design-24-b",
          "option_text": "Noise Reduction Coefficient (NRC)",
          "is_correct": false
        },
        {
          "id": "interior-design-24-c",
          "option_text": "Ceiling Attenuation Class (CAC)",
          "is_correct": false
        },
        {
          "id": "interior-design-24-d",
          "option_text": "Impact Insulation Class (IIC) alone",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-25",
      "question_text": "Under commercial wallcovering standards (WA-101 / ASTM F793), what class of vinyl wallcovering is required for high-traffic corridors, public lobbies, and hospitality corridors?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-25-a",
          "option_text": "Type II Medium / Heavy-Duty Commercial Vinyl (20 oz/linear yard)",
          "is_correct": true
        },
        {
          "id": "interior-design-25-b",
          "option_text": "Type I Light-Duty Residential Vinyl (15 oz/linear yard)",
          "is_correct": false
        },
        {
          "id": "interior-design-25-c",
          "option_text": "Type III Extra Heavy Specialty Wall Guard",
          "is_correct": false
        },
        {
          "id": "interior-design-25-d",
          "option_text": "Uncoated grasscloth wallcovering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-26",
      "question_text": "In drafting two-point perspective drawings for interior spaces, what visual phenomenon causes all horizontal parallel lines receding away from the observer to converge?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-26-a",
          "option_text": "Vanishing Points located on the Horizon Line (Eye Level)",
          "is_correct": true
        },
        {
          "id": "interior-design-26-b",
          "option_text": "Focal points located on the station point plan",
          "is_correct": false
        },
        {
          "id": "interior-design-26-c",
          "option_text": "Cones of vision intersecting ground lines",
          "is_correct": false
        },
        {
          "id": "interior-design-26-d",
          "option_text": "Isometric parallel projection axes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-27",
      "question_text": "What is the standard ergonomic counter height for standard residential kitchen base cabinets (measured from finished floor to countertop surface)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-27-a",
          "option_text": "36 inches (914 mm)",
          "is_correct": true
        },
        {
          "id": "interior-design-27-b",
          "option_text": "30 inches (762 mm)",
          "is_correct": false
        },
        {
          "id": "interior-design-27-c",
          "option_text": "42 inches (1067 mm)",
          "is_correct": false
        },
        {
          "id": "interior-design-27-d",
          "option_text": "28 inches (711 mm)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-28",
      "question_text": "In high-performance acoustic ceiling systems, what is the typical minimum NRC (Noise Reduction Coefficient) specified for open-plan corporate work environments to mitigate speech distractions?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-28-a",
          "option_text": "0.70 to 0.85 NRC",
          "is_correct": true
        },
        {
          "id": "interior-design-28-b",
          "option_text": "0.20 to 0.35 NRC",
          "is_correct": false
        },
        {
          "id": "interior-design-28-c",
          "option_text": "0.05 to 0.15 NRC",
          "is_correct": false
        },
        {
          "id": "interior-design-28-d",
          "option_text": "0.40 to 0.50 NRC",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-29",
      "question_text": "In commercial window solar control, what fabric property of a motorized roller shade describes the percentage of open space between woven yarns that allows exterior view-through?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-29-a",
          "option_text": "Openness Factor (typically 1%, 3%, 5%, or 10%)",
          "is_correct": true
        },
        {
          "id": "interior-design-29-b",
          "option_text": "Solar Reflectance Index (SRI)",
          "is_correct": false
        },
        {
          "id": "interior-design-29-c",
          "option_text": "Visible Light Transmittance (VLT)",
          "is_correct": false
        },
        {
          "id": "interior-design-29-d",
          "option_text": "U-factor thermal conductivity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "interior-design-30",
      "question_text": "When specifying interior paint sheens, which finish offers the highest washability and moisture resistance, making it ideal for commercial restrooms, baseboards, and commercial kitchens?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "interior-design-30-a",
          "option_text": "Semi-Gloss or High-Gloss enamel",
          "is_correct": true
        },
        {
          "id": "interior-design-30-b",
          "option_text": "Flat / Matte finish",
          "is_correct": false
        },
        {
          "id": "interior-design-30-c",
          "option_text": "Eggshell velvet finish",
          "is_correct": false
        },
        {
          "id": "interior-design-30-d",
          "option_text": "Satin low-luster finish",
          "is_correct": false
        }
      ]
    }
  ],
  "game-development": [
    {
      "id": "game-development-1",
      "question_text": "In game engine architecture, what is the primary benefit of decoupling the game physics update (fixed delta time) from the rendering frame rate (variable delta time)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-1-a",
          "option_text": "Ensures deterministic, stable physics simulations and collision resolution regardless of visual rendering lag or variable monitor refresh rates",
          "is_correct": true
        },
        {
          "id": "game-development-1-b",
          "option_text": "Eliminates all CPU memory usage during GPU shader execution",
          "is_correct": false
        },
        {
          "id": "game-development-1-c",
          "option_text": "Guarantees that multiplayer netcode will never encounter packet loss",
          "is_correct": false
        },
        {
          "id": "game-development-1-d",
          "option_text": "Automatically compresses high-resolution 3D textures into MIP maps",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-2",
      "question_text": "Which computational geometry algorithm is standardly used in 3D game engines for narrow-phase convex collision detection between arbitrary convex polyhedra?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-2-a",
          "option_text": "GJK (Gilbert-Johnson-Keerthi) Algorithm and Separating Axis Theorem (SAT)",
          "is_correct": true
        },
        {
          "id": "game-development-2-b",
          "option_text": "Dijkstra shortest path algorithm",
          "is_correct": false
        },
        {
          "id": "game-development-2-c",
          "option_text": "Bresenham line drawing algorithm",
          "is_correct": false
        },
        {
          "id": "game-development-2-d",
          "option_text": "Graham scan convex hull algorithm",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-3",
      "question_text": "In 3D graphics rendering pipelines, what optimization technique discards objects or polygons that are outside the camera’s view volume before rasterization?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-3-a",
          "option_text": "Frustum Culling",
          "is_correct": true
        },
        {
          "id": "game-development-3-b",
          "option_text": "Back-face culling on counter-clockwise triangles",
          "is_correct": false
        },
        {
          "id": "game-development-3-c",
          "option_text": "Occlusion queries on depth buffer z-tests",
          "is_correct": false
        },
        {
          "id": "game-development-3-d",
          "option_text": "Anisotropic texture filtering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-4",
      "question_text": "In game AI design, what hierarchical decision architecture uses Selector, Sequence, and Decorator nodes to dynamically evaluate NPC actions and behaviors?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-4-a",
          "option_text": "Behavior Trees (BT)",
          "is_correct": true
        },
        {
          "id": "game-development-4-b",
          "option_text": "Finite State Machines (FSM) without hierarchy",
          "is_correct": false
        },
        {
          "id": "game-development-4-c",
          "option_text": "Minimax search with alpha-beta pruning",
          "is_correct": false
        },
        {
          "id": "game-development-4-d",
          "option_text": "Neural network weight quantization",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-5",
      "question_text": "What rendering shader stage executes on individual vertices to transform 3D object-space coordinates into clip space using model-view-projection (MVP) matrices?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-5-a",
          "option_text": "Vertex Shader",
          "is_correct": true
        },
        {
          "id": "game-development-5-b",
          "option_text": "Fragment (Pixel) Shader",
          "is_correct": false
        },
        {
          "id": "game-development-5-c",
          "option_text": "Tessellation Evaluation Shader",
          "is_correct": false
        },
        {
          "id": "game-development-5-d",
          "option_text": "Compute Shader for compute dispatch",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-6",
      "question_text": "In competitive multiplayer games, what client-side networking technique hides network latency by immediately simulating local player inputs before receiving server confirmation?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-6-a",
          "option_text": "Client-Side Prediction with Server Reconciliation",
          "is_correct": true
        },
        {
          "id": "game-development-6-b",
          "option_text": "Lockstep peer-to-peer synchronization",
          "is_correct": false
        },
        {
          "id": "game-development-6-c",
          "option_text": "TCP packet retransmission wait loops",
          "is_correct": false
        },
        {
          "id": "game-development-6-d",
          "option_text": "Complete client authority with zero server validation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-7",
      "question_text": "What spatial partitioning data structure recursively divides 3D game world space into eight octants to accelerate collision queries, raycasting, and visibility checks?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-7-a",
          "option_text": "Octree",
          "is_correct": true
        },
        {
          "id": "game-development-7-b",
          "option_text": "Binary Search Tree (BST)",
          "is_correct": false
        },
        {
          "id": "game-development-7-c",
          "option_text": "Quadtree (2D planar only)",
          "is_correct": false
        },
        {
          "id": "game-development-7-d",
          "option_text": "Hash Ring with consistent hashing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-8",
      "question_text": "What 3D asset optimization technique substitutes high-polygon 3D meshes with lower-polygon models as the camera moves further away from the object?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-8-a",
          "option_text": "Level of Detail (LOD) Meshing",
          "is_correct": true
        },
        {
          "id": "game-development-8-b",
          "option_text": "Ray-marched signed distance fields",
          "is_correct": false
        },
        {
          "id": "game-development-8-c",
          "option_text": "Subdivision surface displacement mapping",
          "is_correct": false
        },
        {
          "id": "game-development-8-d",
          "option_text": "Morph target blend shape interpolation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-9",
      "question_text": "In skeletal animation, what skinning method calculates the deformed position of a vertex by computing a weighted average of transformation matrices from multiple influencing bones?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-9-a",
          "option_text": "Linear Blend Skinning (LBS) or Dual Quaternion Skinning (DQS)",
          "is_correct": true
        },
        {
          "id": "game-development-9-b",
          "option_text": "Forward kinematic chain rotation without weighting",
          "is_correct": false
        },
        {
          "id": "game-development-9-c",
          "option_text": "Rigid parent attachment to a single root bone",
          "is_correct": false
        },
        {
          "id": "game-development-9-d",
          "option_text": "Vertex texture fetch displacement without bones",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-10",
      "question_text": "What visual artifact in real-time rendering occurs when a camera moves faster than the monitor’s refresh cycle, resulting in parts of multiple frames appearing simultaneously on screen?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "game-development-10-a",
          "option_text": "Screen Tearing (mitigated by V-Sync, G-Sync, or FreeSync)",
          "is_correct": true
        },
        {
          "id": "game-development-10-b",
          "option_text": "Z-fighting due to low depth buffer precision",
          "is_correct": false
        },
        {
          "id": "game-development-10-c",
          "option_text": "Aliasing stair-stepping on diagonal geometric edges",
          "is_correct": false
        },
        {
          "id": "game-development-10-d",
          "option_text": "Motion blur shutter ghosting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-11",
      "question_text": "In modern game engine architecture (e.g. Unity or Unreal Engine), what is the difference between a variable frame update loop and a fixed-interval physics tick loop?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-11-a",
          "option_text": "Update() executes once per rendered frame with variable deltaTime; FixedUpdate() executes at constant time intervals for deterministic physics calculations",
          "is_correct": true
        },
        {
          "id": "game-development-11-b",
          "option_text": "Update() handles multi-threaded network packets; FixedUpdate() runs purely on GPU vertex shaders",
          "is_correct": false
        },
        {
          "id": "game-development-11-c",
          "option_text": "FixedUpdate() is executed only once when the game loads into system RAM",
          "is_correct": false
        },
        {
          "id": "game-development-11-d",
          "option_text": "Update() can only be called from mobile Android devices",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-12",
      "question_text": "In 3D collision detection pipelines, what two-stage optimization architecture reduces performance overhead when evaluating hundreds of moving rigid bodies?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-12-a",
          "option_text": "Broad-phase collision using spatial partitioning/bounding boxes, followed by narrow-phase precision triangle mesh intersection",
          "is_correct": true
        },
        {
          "id": "game-development-12-b",
          "option_text": "Raymarching through screen space followed by depth buffer clearing",
          "is_correct": false
        },
        {
          "id": "game-development-12-c",
          "option_text": "Fragment shading depth sorting followed by alpha blending",
          "is_correct": false
        },
        {
          "id": "game-development-12-d",
          "option_text": "Euler integration followed by matrix inversion",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-13",
      "question_text": "In modern real-time rendering pipelines, what is the primary advantage of Deferred Shading over traditional Forward Rendering in scenes with many dynamic light sources?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-13-a",
          "option_text": "Lighting calculations decouple from scene geometric complexity with O(geometry + lights) overhead instead of O(geometry * lights)",
          "is_correct": true
        },
        {
          "id": "game-development-13-b",
          "option_text": "Deferred Shading eliminates the need for a depth buffer",
          "is_correct": false
        },
        {
          "id": "game-development-13-c",
          "option_text": "Deferred Shading natively handles transparent glass surfaces without artifacts",
          "is_correct": false
        },
        {
          "id": "game-development-13-d",
          "option_text": "Deferred Shading uses zero video memory on the GPU",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-14",
      "question_text": "What design pattern pre-instantiates and recycles a collection of game objects (like bullets, enemy spawns, and particle effects) to eliminate garbage collection frame-stutters?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-14-a",
          "option_text": "Object Pool Pattern",
          "is_correct": true
        },
        {
          "id": "game-development-14-b",
          "option_text": "Observer Pattern",
          "is_correct": false
        },
        {
          "id": "game-development-14-c",
          "option_text": "Singleton Pattern",
          "is_correct": false
        },
        {
          "id": "game-development-14-d",
          "option_text": "Model-View-ViewModel (MVVM) Pattern",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-15",
      "question_text": "In game AI navigation on complex 3D terrain, which pathfinding algorithm combined with Navigation Meshes (NavMesh) calculates optimal routes using heuristics?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-15-a",
          "option_text": "A* (A-Star) Search Algorithm",
          "is_correct": true
        },
        {
          "id": "game-development-15-b",
          "option_text": "Breadth-First Search (BFS) without weights",
          "is_correct": false
        },
        {
          "id": "game-development-15-c",
          "option_text": "Linear regression gradient descent",
          "is_correct": false
        },
        {
          "id": "game-development-15-d",
          "option_text": "Floyd-Warshall all-pairs shortest path",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-16",
      "question_text": "In character procedural animation, what mathematical technique calculates joint rotation angles along a bone chain so an end effector (like a character foot) matches target ground topography?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-16-a",
          "option_text": "Inverse Kinematics (IK)",
          "is_correct": true
        },
        {
          "id": "game-development-16-b",
          "option_text": "Forward Kinematics (FK) alone",
          "is_correct": false
        },
        {
          "id": "game-development-16-c",
          "option_text": "Linear Blend Skinning without joints",
          "is_correct": false
        },
        {
          "id": "game-development-16-d",
          "option_text": "Quat-to-Euler gimbal translation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-17",
      "question_text": "In graphics rendering optimization, what technique renders lower-polygon 3D meshes as an object moves further away from the active camera view?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-17-a",
          "option_text": "Level of Detail (LOD) Meshing",
          "is_correct": true
        },
        {
          "id": "game-development-17-b",
          "option_text": "Frustum culling without clipping",
          "is_correct": false
        },
        {
          "id": "game-development-17-c",
          "option_text": "Texture mipmapping alone",
          "is_correct": false
        },
        {
          "id": "game-development-17-d",
          "option_text": "Normal map baking",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-18",
      "question_text": "In fast-paced multiplayer network programming, what client-side technique immediately displays local player inputs before receiving authoritative confirmation from the dedicated game server?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-18-a",
          "option_text": "Client-Side Prediction with Server Reconciliation and Rollback",
          "is_correct": true
        },
        {
          "id": "game-development-18-b",
          "option_text": "Lockstep peer-to-peer wait loop",
          "is_correct": false
        },
        {
          "id": "game-development-18-c",
          "option_text": "Stop-and-wait ARQ packet protocol",
          "is_correct": false
        },
        {
          "id": "game-development-18-d",
          "option_text": "Unicast broadcast pinging without authority",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-19",
      "question_text": "In real-time 3D graphics, what spatial data structure recursively subdivides three-dimensional space into eight octants to accelerate frustum and occlusion culling?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-19-a",
          "option_text": "Octree",
          "is_correct": true
        },
        {
          "id": "game-development-19-b",
          "option_text": "Quadtree (2D only)",
          "is_correct": false
        },
        {
          "id": "game-development-19-c",
          "option_text": "Binary Heap",
          "is_correct": false
        },
        {
          "id": "game-development-19-d",
          "option_text": "Linear Doubly Linked List",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-20",
      "question_text": "What modern data-oriented architectural paradigm organizes games into pure Data Components and Systems operating on contiguous memory arrays for CPU cache optimization?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "game-development-20-a",
          "option_text": "Entity Component System (ECS)",
          "is_correct": true
        },
        {
          "id": "game-development-20-b",
          "option_text": "Object-Oriented Inheritance Hierarchy",
          "is_correct": false
        },
        {
          "id": "game-development-20-c",
          "option_text": "Monolithic God Object Pattern",
          "is_correct": false
        },
        {
          "id": "game-development-20-d",
          "option_text": "Procedural Spaghetti Routine",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-21",
      "question_text": "In 3D character rigging, what rotation representation eliminates 'Gimbal Lock' (the loss of one degree of freedom when two rotation axes align)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-21-a",
          "option_text": "Quaternions (four-dimensional hypercomplex numbers)",
          "is_correct": true
        },
        {
          "id": "game-development-21-b",
          "option_text": "Euler angles (Pitch, Yaw, Roll)",
          "is_correct": false
        },
        {
          "id": "game-development-21-c",
          "option_text": "3x3 Orthographic projection matrices",
          "is_correct": false
        },
        {
          "id": "game-development-21-d",
          "option_text": "Cartesian coordinate offset vectors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-22",
      "question_text": "In shader development, which shader stage runs per-pixel/fragment on the GPU, calculating final surface color, roughness, and specular reflections based on lighting models?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-22-a",
          "option_text": "Fragment / Pixel Shader",
          "is_correct": true
        },
        {
          "id": "game-development-22-b",
          "option_text": "Vertex Shader (operating on mesh vertices)",
          "is_correct": false
        },
        {
          "id": "game-development-22-c",
          "option_text": "Tessellation Hull Shader",
          "is_correct": false
        },
        {
          "id": "game-development-22-d",
          "option_text": "Geometry Primitive Shader",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-23",
      "question_text": "What technique generates pre-filtered, progressively lower-resolution versions of a texture to prevent aliasing artifacts and reduce memory bandwidth when textured surfaces are viewed at a distance?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-23-a",
          "option_text": "Mipmapping",
          "is_correct": true
        },
        {
          "id": "game-development-23-b",
          "option_text": "Alpha testing",
          "is_correct": false
        },
        {
          "id": "game-development-23-c",
          "option_text": "Bilinear anisotropic clamping",
          "is_correct": false
        },
        {
          "id": "game-development-23-d",
          "option_text": "Render-to-texture blitting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-24",
      "question_text": "In game AI behavior architecture, what hierarchical structure uses composite selector and sequence nodes with conditions and actions to govern complex NPC decision-making?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-24-a",
          "option_text": "Behavior Trees (BT)",
          "is_correct": true
        },
        {
          "id": "game-development-24-b",
          "option_text": "Simple two-state boolean switch",
          "is_correct": false
        },
        {
          "id": "game-development-24-c",
          "option_text": "Unsorted FIFO job queue",
          "is_correct": false
        },
        {
          "id": "game-development-24-d",
          "option_text": "Hardcoded switch-case statement without hierarchy",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-25",
      "question_text": "In game physics simulation, what parameter measures the elasticity of a collision between two rigid bodies (where 1.0 represents a perfectly elastic collision and 0.0 is completely inelastic)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-25-a",
          "option_text": "Coefficient of Restitution",
          "is_correct": true
        },
        {
          "id": "game-development-25-b",
          "option_text": "Friction friction coefficient",
          "is_correct": false
        },
        {
          "id": "game-development-25-c",
          "option_text": "Linear drag damping ratio",
          "is_correct": false
        },
        {
          "id": "game-development-25-d",
          "option_text": "Inertia tensor diagonal",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-26",
      "question_text": "What post-processing ambient shading technique darkens creases, corners, and contact points between objects in real time by sampling nearby screen-space depth values?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-26-a",
          "option_text": "Screen Space Ambient Occlusion (SSAO)",
          "is_correct": true
        },
        {
          "id": "game-development-26-b",
          "option_text": "Fast Approximate Anti-Aliasing (FXAA)",
          "is_correct": false
        },
        {
          "id": "game-development-26-c",
          "option_text": "High Dynamic Range (HDR) Tone Mapping",
          "is_correct": false
        },
        {
          "id": "game-development-26-d",
          "option_text": "Chromatic Aberration Fringe",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-27",
      "question_text": "In game audio programming, what spatial filtering technology models how sound waves diffract around human ear pinnae and head geometry to simulate authentic 3D spatialized binaural audio?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-27-a",
          "option_text": "Head-Related Transfer Function (HRTF)",
          "is_correct": true
        },
        {
          "id": "game-development-27-b",
          "option_text": "Graphic equalizer peak boost",
          "is_correct": false
        },
        {
          "id": "game-development-27-c",
          "option_text": "Dynamic range compression limiter",
          "is_correct": false
        },
        {
          "id": "game-development-27-d",
          "option_text": "Flanger phase modulation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-28",
      "question_text": "In graphics optimization, what is a 'Draw Call' in the context of communicating between the CPU and GPU?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-28-a",
          "option_text": "A command issued by the CPU to the graphics API instructing the GPU to render a specific batch of geometry using designated shader states",
          "is_correct": true
        },
        {
          "id": "game-development-28-b",
          "option_text": "A network packet sent to a remote game server requesting player coordinates",
          "is_correct": false
        },
        {
          "id": "game-development-28-c",
          "option_text": "A database query retrieving player high scores from cold storage",
          "is_correct": false
        },
        {
          "id": "game-development-28-d",
          "option_text": "A hardware interrupt that powers down the computer monitor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-29",
      "question_text": "In real-time computer graphics, what technique calculates dynamic lighting and reflections by tracing rays of light through the scene geometry in real time?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-29-a",
          "option_text": "Ray Tracing / Path Tracing (e.g. DXR / Vulkan RT)",
          "is_correct": true
        },
        {
          "id": "game-development-29-b",
          "option_text": "Precomputed diffuse radiosity lightmaps only",
          "is_correct": false
        },
        {
          "id": "game-development-29-c",
          "option_text": "Vertex color baking",
          "is_correct": false
        },
        {
          "id": "game-development-29-d",
          "option_text": "Screen-space blit pass",
          "is_correct": false
        }
      ]
    },
    {
      "id": "game-development-30",
      "question_text": "What anti-aliasing technique reduces jagged pixel edges by accumulating and blending sub-pixel jitter samples across consecutive temporal frames?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "game-development-30-a",
          "option_text": "Temporal Anti-Aliasing (TAA)",
          "is_correct": true
        },
        {
          "id": "game-development-30-b",
          "option_text": "Multi-Sample Anti-Aliasing (MSAA) single-frame only",
          "is_correct": false
        },
        {
          "id": "game-development-30-c",
          "option_text": "Supersampling (SSAA) 16x brute force",
          "is_correct": false
        },
        {
          "id": "game-development-30-d",
          "option_text": "Nearest-neighbor point sampling",
          "is_correct": false
        }
      ]
    }
  ],
  "fashion-design": [
    {
      "id": "fashion-design-1",
      "question_text": "In apparel pattern making, what technique involves moving a bodice dart to a new location (e.g., from waist to armhole or shoulder) while maintaining the original fit and garment silhouette?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-1-a",
          "option_text": "Dart manipulation (pivoting or slash-and-spread method)",
          "is_correct": true
        },
        {
          "id": "fashion-design-1-b",
          "option_text": "Pattern grading across dimensional size ranges",
          "is_correct": false
        },
        {
          "id": "fashion-design-1-c",
          "option_text": "Bias grainline stretching along crosswise grain",
          "is_correct": false
        },
        {
          "id": "fashion-design-1-d",
          "option_text": "French seam encasing on raw curved edges",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-2",
      "question_text": "What is the primary aesthetic and structural difference between garments cut on the \"true bias\" (45-degree angle to warp and weft) versus the straight grain?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-2-a",
          "option_text": "Bias cut garments fluidly drape and contour to body curves with natural elasticity and stretch without requiring Lycra",
          "is_correct": true
        },
        {
          "id": "fashion-design-2-b",
          "option_text": "Bias cut garments are rigid, stiff, and prevent any dimensional elongation",
          "is_correct": false
        },
        {
          "id": "fashion-design-2-c",
          "option_text": "Bias cut fabrics require zero seam allowance and cannot fray along raw edges",
          "is_correct": false
        },
        {
          "id": "fashion-design-2-d",
          "option_text": "Bias grain garments have identical tensile strength in horizontal and vertical axes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-3",
      "question_text": "In haute couture dressmaking, what hand-sewing technique cleanly encases raw fabric edges inside a narrow double fold, ideal for sheer fabrics like chiffon and organza?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-3-a",
          "option_text": "French seam",
          "is_correct": true
        },
        {
          "id": "fashion-design-3-b",
          "option_text": "Flat-felled seam",
          "is_correct": false
        },
        {
          "id": "fashion-design-3-c",
          "option_text": "Overlock 4-thread serger seam",
          "is_correct": false
        },
        {
          "id": "fashion-design-3-d",
          "option_text": "Bound Hong Kong finish with synthetic webbing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-4",
      "question_text": "In the color theory of fashion and styling, what term describes the relative purity, intensity, or saturation of a color compared to pure gray?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-4-a",
          "option_text": "Chroma (saturation)",
          "is_correct": true
        },
        {
          "id": "fashion-design-4-b",
          "option_text": "Hue designation",
          "is_correct": false
        },
        {
          "id": "fashion-design-4-c",
          "option_text": "Value (lightness or darkness)",
          "is_correct": false
        },
        {
          "id": "fashion-design-4-d",
          "option_text": "Color temperature (warm versus cool undertone)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-5",
      "question_text": "Which natural protein fiber obtained from the fleece of sheep possesses natural crimp, moisture-wicking properties, and thermal insulation capabilities?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-5-a",
          "option_text": "Wool (Keratin fiber)",
          "is_correct": true
        },
        {
          "id": "fashion-design-5-b",
          "option_text": "Cotton (Cellulose staple fiber)",
          "is_correct": false
        },
        {
          "id": "fashion-design-5-c",
          "option_text": "Linen (Bast fiber from flax plant)",
          "is_correct": false
        },
        {
          "id": "fashion-design-5-d",
          "option_text": "Silk (Fibroin continuous filament)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-6",
      "question_text": "In technical garment design, what document provides manufacturers with complete construction details, bill of materials (BOM), measurement grade rules, and stitch specifications?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-6-a",
          "option_text": "Tech Pack (Technical Specification Sheet)",
          "is_correct": true
        },
        {
          "id": "fashion-design-6-b",
          "option_text": "Fashion mood board collage",
          "is_correct": false
        },
        {
          "id": "fashion-design-6-c",
          "option_text": "Trend forecasting palette book",
          "is_correct": false
        },
        {
          "id": "fashion-design-6-d",
          "option_text": "Runway lookbook portfolio",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-7",
      "question_text": "What manufacturing method is used to create proportional increments and decrements to a base sample pattern (usually Size M or 8) to create a full size run (XS to XXL)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-7-a",
          "option_text": "Pattern Grading",
          "is_correct": true
        },
        {
          "id": "fashion-design-7-b",
          "option_text": "Draping on dress form",
          "is_correct": false
        },
        {
          "id": "fashion-design-7-c",
          "option_text": "Marker planning and fabric spreading",
          "is_correct": false
        },
        {
          "id": "fashion-design-7-d",
          "option_text": "Toile fitting and muslin prototyping",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-8",
      "question_text": "What fashion design silhouette is characterized by a closely fitted bodice that dramatically flares outward from the natural waistline like an inverted letter A?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-8-a",
          "option_text": "A-line silhouette (popularized by Christian Dior in 1955)",
          "is_correct": true
        },
        {
          "id": "fashion-design-8-b",
          "option_text": "Empire waist silhouette with high seam under the bust",
          "is_correct": false
        },
        {
          "id": "fashion-design-8-c",
          "option_text": "Sheath column silhouette with straight vertical lines",
          "is_correct": false
        },
        {
          "id": "fashion-design-8-d",
          "option_text": "Drop-waist flapper silhouette resting on low hips",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-9",
      "question_text": "Which sustainable fashion principle focuses on designing garments with recyclable mono-materials, zero waste patterns, and extended circular product lifecycles?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-9-a",
          "option_text": "Circular Fashion & Closed-Loop Lifecycle Design",
          "is_correct": true
        },
        {
          "id": "fashion-design-9-b",
          "option_text": "Fast fashion rapid inventory obsolescence",
          "is_correct": false
        },
        {
          "id": "fashion-design-9-c",
          "option_text": "Petroleum-based synthetic microplastic weaving",
          "is_correct": false
        },
        {
          "id": "fashion-design-9-d",
          "option_text": "Single-season trend overproduction",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-10",
      "question_text": "In woven fabric structure, what are the lengthwise vertical yarns held under tension on the weaving loom called?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-10-a",
          "option_text": "Warp yarns (ends)",
          "is_correct": true
        },
        {
          "id": "fashion-design-10-b",
          "option_text": "Weft yarns (picks or filling)",
          "is_correct": false
        },
        {
          "id": "fashion-design-10-c",
          "option_text": "Selvedge edge binding threads",
          "is_correct": false
        },
        {
          "id": "fashion-design-10-d",
          "option_text": "Bias diagonal filament yarns",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-11",
      "question_text": "In textile science, which basic fabric weave structure is characterized by distinct diagonal lines or wales running across the fabric surface (such as in denim, gabardine, and drill)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-11-a",
          "option_text": "Twill Weave",
          "is_correct": true
        },
        {
          "id": "fashion-design-11-b",
          "option_text": "Plain Weave (Tabby weave)",
          "is_correct": false
        },
        {
          "id": "fashion-design-11-c",
          "option_text": "Satin Weave",
          "is_correct": false
        },
        {
          "id": "fashion-design-11-d",
          "option_text": "Jacquard Damask Weave",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-12",
      "question_text": "In pattern drafting and garment construction, cutting fabric at a 45-degree angle to the lengthwise warp and crosswise weft grainlines is known as cutting on the:",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-12-a",
          "option_text": "True Bias (maximizing drape and fluid stretch)",
          "is_correct": true
        },
        {
          "id": "fashion-design-12-b",
          "option_text": "Straight of Grain (warp direction)",
          "is_correct": false
        },
        {
          "id": "fashion-design-12-c",
          "option_text": "Crossgrain (weft direction)",
          "is_correct": false
        },
        {
          "id": "fashion-design-12-d",
          "option_text": "Selvedge border",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-13",
      "question_text": "In flat pattern making, what triangular fold is stitched into flat fabric to shape a 2D piece around 3D body contours (such as the bust, shoulder, or hips)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-13-a",
          "option_text": "Dart",
          "is_correct": true
        },
        {
          "id": "fashion-design-13-b",
          "option_text": "Pleat",
          "is_correct": false
        },
        {
          "id": "fashion-design-13-c",
          "option_text": "Gore",
          "is_correct": false
        },
        {
          "id": "fashion-design-13-d",
          "option_text": "Godet",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-14",
      "question_text": "In tailored menswear and jacket construction, what high-end seam finishes raw fabric edges entirely inside a neat double-folded seam without exposing any serging threads?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-14-a",
          "option_text": "French Seam",
          "is_correct": true
        },
        {
          "id": "fashion-design-14-b",
          "option_text": "Standard 4-thread overlock seam",
          "is_correct": false
        },
        {
          "id": "fashion-design-14-c",
          "option_text": "Pinked edge zigzag seam",
          "is_correct": false
        },
        {
          "id": "fashion-design-14-d",
          "option_text": "Raw cut lockstitch seam",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-15",
      "question_text": "In apparel manufacturing, what comprehensive document communicates complete design specifications, technical flats, bill of materials (BOM), stitch types, and points of measurement (POM) to garment factories?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-15-a",
          "option_text": "Tech Pack (Technical Specification Package)",
          "is_correct": true
        },
        {
          "id": "fashion-design-15-b",
          "option_text": "Mood Board collage",
          "is_correct": false
        },
        {
          "id": "fashion-design-15-c",
          "option_text": "Cost of Goods Sold (COGS) ledger",
          "is_correct": false
        },
        {
          "id": "fashion-design-15-d",
          "option_text": "Lookbook marketing catalog",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-16",
      "question_text": "Under the legal criteria established by the Fédération de la Haute Couture et de la Mode in Paris, which requirement must a fashion house fulfill to use the protected label 'Haute Couture'?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-16-a",
          "option_text": "Design made-to-order garments with custom fittings, maintain a Paris atelier with at least 15 full-time staff, and present two collections per year",
          "is_correct": true
        },
        {
          "id": "fashion-design-16-b",
          "option_text": "Sell mass-produced ready-to-wear collections in over 1,000 retail department stores",
          "is_correct": false
        },
        {
          "id": "fashion-design-16-c",
          "option_text": "Produce all garments exclusively with 100% synthetic recycled polyester",
          "is_correct": false
        },
        {
          "id": "fashion-design-16-d",
          "option_text": "Manufacture all clothing lines using automated computer-controlled laser cutters only",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-17",
      "question_text": "In natural textile fibers, which protein fiber harvested from the cocoons of Bombyx mori silkworms is known for its triangular prism-like fiber cross-section that refracts light at different angles?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-17-a",
          "option_text": "Silk",
          "is_correct": true
        },
        {
          "id": "fashion-design-17-b",
          "option_text": "Cotton (cellulose seed hair)",
          "is_correct": false
        },
        {
          "id": "fashion-design-17-c",
          "option_text": "Linen (flax bast fiber)",
          "is_correct": false
        },
        {
          "id": "fashion-design-17-d",
          "option_text": "Hemp fiber",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-18",
      "question_text": "In industrial apparel pattern grading, what process scales a base size pattern (sample size) up and down to create a complete range of commercial sizes?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-18-a",
          "option_text": "Pattern Grading using Cartesian grade rules (X and Y coordinate shifts)",
          "is_correct": true
        },
        {
          "id": "fashion-design-18-b",
          "option_text": "Draping on an adjustable dress form",
          "is_correct": false
        },
        {
          "id": "fashion-design-18-c",
          "option_text": "Rotary die stamping",
          "is_correct": false
        },
        {
          "id": "fashion-design-18-d",
          "option_text": "Fabric bias stretching",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-19",
      "question_text": "In knitwear engineering, what machine metric indicates the number of needles per inch across the needle bed, determining whether a knit is coarse gauge (chunky) or fine gauge?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-19-a",
          "option_text": "Machine Gauge (GG)",
          "is_correct": true
        },
        {
          "id": "fashion-design-19-b",
          "option_text": "Denier filament count",
          "is_correct": false
        },
        {
          "id": "fashion-design-19-c",
          "option_text": "Tex metric weight",
          "is_correct": false
        },
        {
          "id": "fashion-design-19-d",
          "option_text": "NeB yarn count ratio",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-20",
      "question_text": "What sewing machine stitch classification (ISO 4915) uses a top needle thread interlocking with a bottom bobbin thread, forming the standard lockstitch used in universal garment assembly?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-20-a",
          "option_text": "Stitch Type 301 (Lockstitch)",
          "is_correct": true
        },
        {
          "id": "fashion-design-20-b",
          "option_text": "Stitch Type 101 (Single-thread chainstitch)",
          "is_correct": false
        },
        {
          "id": "fashion-design-20-c",
          "option_text": "Stitch Type 401 (Two-thread chainstitch)",
          "is_correct": false
        },
        {
          "id": "fashion-design-20-d",
          "option_text": "Stitch Type 504 (Three-thread overedge)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-21",
      "question_text": "In garment tailoring, what supportive textile layer is placed between the outer shell fabric and lining of a jacket chest piece to impart structure, shape retention, and roll to the lapel?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-21-a",
          "option_text": "Hair Canvas Interfacing (horsehair or wool canvas)",
          "is_correct": true
        },
        {
          "id": "fashion-design-21-b",
          "option_text": "Thermal polyester batting insulation",
          "is_correct": false
        },
        {
          "id": "fashion-design-21-c",
          "option_text": "Lightweight synthetic tricot knit",
          "is_correct": false
        },
        {
          "id": "fashion-design-21-d",
          "option_text": "Spunbond polypropylene disposable backing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-22",
      "question_text": "In sustainable textile chemistry, which regenerated cellulosic fiber is produced via a closed-loop solvent spinning process that recycles non-toxic N-Methylmorpholine N-oxide (NMMO) solvent and water?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-22-a",
          "option_text": "Lyocell (TENCEL)",
          "is_correct": true
        },
        {
          "id": "fashion-design-22-b",
          "option_text": "Conventional viscose rayon (xanthate process)",
          "is_correct": false
        },
        {
          "id": "fashion-design-22-c",
          "option_text": "Secondary cellulose acetate",
          "is_correct": false
        },
        {
          "id": "fashion-design-22-d",
          "option_text": "Cuprammonium rayon",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-23",
      "question_text": "In color specification for apparel and footwear manufacturing, which globally recognized color standardization system uses unique alphanumeric codes for textiles (e.g. 19-4052 TCX Classic Blue)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-23-a",
          "option_text": "Pantone Fashion, Home + Interiors (FHI) System",
          "is_correct": true
        },
        {
          "id": "fashion-design-23-b",
          "option_text": "Federal Standard 595C paint codes",
          "is_correct": false
        },
        {
          "id": "fashion-design-23-c",
          "option_text": "RAL Classic industrial powder coat system",
          "is_correct": false
        },
        {
          "id": "fashion-design-23-d",
          "option_text": "Natural Colour System (NCS) exterior standard",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-24",
      "question_text": "In denim production and durable workwear jeans, what sturdy seam features overlapping folded edges stitched down with two parallel rows of needle stitching on the outside?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-24-a",
          "option_text": "Flat-Felled Seam (Lap Seam)",
          "is_correct": true
        },
        {
          "id": "fashion-design-24-b",
          "option_text": "Open pressed plain seam with overcast edges",
          "is_correct": false
        },
        {
          "id": "fashion-design-24-c",
          "option_text": "Overlocked single safety stitch",
          "is_correct": false
        },
        {
          "id": "fashion-design-24-d",
          "option_text": "Welt seam with exposed raw edges",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-25",
      "question_text": "In textile testing, which metric defines the mass in grams per 9,000 meters of a continuous filament fiber or yarn (commonly used for hosiery, nylon, and polyester)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-25-a",
          "option_text": "Denier",
          "is_correct": true
        },
        {
          "id": "fashion-design-25-b",
          "option_text": "Tex (grams per 1,000 meters)",
          "is_correct": false
        },
        {
          "id": "fashion-design-25-c",
          "option_text": "Cotton Count (NeC)",
          "is_correct": false
        },
        {
          "id": "fashion-design-25-d",
          "option_text": "Worsted Count",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-26",
      "question_text": "In 3D garment design and haute couture atelier practice, what process shapes uncut fabric (typically cotton muslin/toile) directly on a three-dimensional dress mannequin to develop garment patterns?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-26-a",
          "option_text": "Draping (Moulage)",
          "is_correct": true
        },
        {
          "id": "fashion-design-26-b",
          "option_text": "CAD vector flat drafting",
          "is_correct": false
        },
        {
          "id": "fashion-design-26-c",
          "option_text": "Digitizer table tracing",
          "is_correct": false
        },
        {
          "id": "fashion-design-26-d",
          "option_text": "Computerized marker nesting",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-27",
      "question_text": "What fabric property describes how a textile falls, ripples, and conforms to a three-dimensional form under the influence of gravity?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-27-a",
          "option_text": "Fabric Drape (Drape Coefficient)",
          "is_correct": true
        },
        {
          "id": "fashion-design-27-b",
          "option_text": "Tensile breaking tenacity",
          "is_correct": false
        },
        {
          "id": "fashion-design-27-c",
          "option_text": "Abrasion resistance double rubs",
          "is_correct": false
        },
        {
          "id": "fashion-design-27-d",
          "option_text": "Dimensional shrinkage percentage",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-28",
      "question_text": "Which historical silhouette created by Christian Dior in his 1947 'New Look' collection is characterized by narrow, sloped shoulders, a tiny cinched waist, and a voluminous calf-length full skirt?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-28-a",
          "option_text": "The Hourglass (Corolle) Silhouette",
          "is_correct": true
        },
        {
          "id": "fashion-design-28-b",
          "option_text": "The 1920s Tubular Flapper Silhouette",
          "is_correct": false
        },
        {
          "id": "fashion-design-28-c",
          "option_text": "The 1960s Mini A-Line Trapeze Silhouette",
          "is_correct": false
        },
        {
          "id": "fashion-design-28-d",
          "option_text": "The 1980s Oversized Power Suit Silhouette",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-29",
      "question_text": "In textile dyeing, what method introduces dye pigments directly into liquid chemical polymer dope before extruding filaments through spinnerets, ensuring superior colorfastness against sunlight and bleaching?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-29-a",
          "option_text": "Solution / Dope Dyeing",
          "is_correct": true
        },
        {
          "id": "fashion-design-29-b",
          "option_text": "Piece Dyeing of woven grey goods",
          "is_correct": false
        },
        {
          "id": "fashion-design-29-c",
          "option_text": "Garment Dip Dyeing",
          "is_correct": false
        },
        {
          "id": "fashion-design-29-d",
          "option_text": "Screen Print Overdyeing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "fashion-design-30",
      "question_text": "In retail fashion merchandising, what pricing model establishes the retail selling price at exactly double the wholesale cost price of a garment?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "fashion-design-30-a",
          "option_text": "Keystone Markup (100% markup on wholesale cost / 50% gross margin)",
          "is_correct": true
        },
        {
          "id": "fashion-design-30-b",
          "option_text": "Loss-Leader Promotional Pricing",
          "is_correct": false
        },
        {
          "id": "fashion-design-30-c",
          "option_text": "Dynamic auction algorithmic pricing",
          "is_correct": false
        },
        {
          "id": "fashion-design-30-d",
          "option_text": "Breakeven penetration pricing",
          "is_correct": false
        }
      ]
    }
  ],
  "robotics-engineering": [
    {
      "id": "robotics-engineering-1",
      "question_text": "In serial robotic arm kinematics, which standard mathematical convention uses four geometric parameters (link length, link twist, link offset, joint angle) to attach coordinate frames to adjacent links?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-1-a",
          "option_text": "Denavit-Hartenberg (DH) Convention",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-1-b",
          "option_text": "Euler-Lagrange Coordinate Mapping",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-1-c",
          "option_text": "Rodrigues Rotation Formula",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-1-d",
          "option_text": "Quaternionic Plücker Transformation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-2",
      "question_text": "What occurs mathematically at a kinematic singularity in a 6-DOF industrial articulated robot manipulator?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-2-a",
          "option_text": "The manipulator Jacobian matrix loses full rank (determinant equals zero), causing loss of one or more degrees of mobility",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-2-b",
          "option_text": "The joint motors automatically trip their thermal overload relays",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-2-c",
          "option_text": "The end-effector payload acceleration drops instantaneously to zero",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-2-d",
          "option_text": "The inverse kinematics problem yields exactly one unique closed-form solution",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-3",
      "question_text": "Which sampling-based motion planning algorithm is guaranteed to converge to an optimal collision-free path as the number of samples approaches infinity?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-3-a",
          "option_text": "RRT* (Optimal Rapidly-exploring Random Trees)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-3-b",
          "option_text": "Standard RRT without tree rewiring",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-3-c",
          "option_text": "Potential Field Method with local minimum attraction",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-3-d",
          "option_text": "Dijkstra algorithm on an unweighted grid",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-4",
      "question_text": "In mobile robot navigation, what does the acronym SLAM stand for?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-4-a",
          "option_text": "Simultaneous Localization and Mapping",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-4-b",
          "option_text": "Synchronous Linear Actuator Measurement",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-4-c",
          "option_text": "Spatial Lidar Alignment Matrix",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-4-d",
          "option_text": "Sensor Level Actuation Modeling",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-5",
      "question_text": "What type of robotic gear reducer offers zero-backlash, high gear reduction ratios (up to 160:1) in a compact coaxial design, widely used in collaborative robot joints?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-5-a",
          "option_text": "Harmonic drive (strain wave gearing)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-5-b",
          "option_text": "Single-stage spur gear pair",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-5-c",
          "option_text": "Worm gear with lead angle backlash",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-5-d",
          "option_text": "Open bevel gear differential assembly",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-6",
      "question_text": "In feedback control of robotic joints, what does the Derivative (D) gain in a PID controller primarily contribute to system dynamics?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-6-a",
          "option_text": "Provides anticipatory damping to reduce overshoot and oscillations in trajectory tracking",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-6-b",
          "option_text": "Eliminates steady-state position error caused by gravitational torque",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-6-c",
          "option_text": "Amplifies high-frequency encoder noise to increase joint stiffness",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-6-d",
          "option_text": "Limits peak motor drive current during stall conditions",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-7",
      "question_text": "In the Robot Operating System (ROS 2), what communication paradigm is used for request-response transactions that execute asynchronously and report continuous feedback progress?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-7-a",
          "option_text": "ROS 2 Actions (Goal, Feedback, Result)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-7-b",
          "option_text": "ROS 2 Topics (Publisher-Subscriber stream only)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-7-c",
          "option_text": "ROS 2 Services (blocking two-way request without feedback)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-7-d",
          "option_text": "ROS 2 Parameter client primitives",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-8",
      "question_text": "What sensor fusion algorithm is standardly used in autonomous robots to combine high-frequency IMU accelerometer/gyroscope readings with wheel odometry and LiDAR pose estimates?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-8-a",
          "option_text": "Extended Kalman Filter (EKF) or Unscented Kalman Filter (UKF)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-8-b",
          "option_text": "Fast Fourier Transform (FFT) peak detector",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-8-c",
          "option_text": "Simple moving average filter with fixed rectangular window",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-8-d",
          "option_text": "K-means clustering classifier",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-9",
      "question_text": "What control methodology allows an industrial robot to safely interact with a stiff environment by simulating a virtual spring-damper relationship between contact force and end-effector position?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-9-a",
          "option_text": "Impedance / Admittance control",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-9-b",
          "option_text": "Pure position control with high proportional gain",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-9-c",
          "option_text": "Open-loop voltage feedforward control",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-9-d",
          "option_text": "Bang-bang contact switching control",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-10",
      "question_text": "Which representation of 3D spatial rotation avoids the mathematical singularity known as \"gimbal lock\" in robotic orientation modeling?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-10-a",
          "option_text": "Unit Quaternions (Euler parameters)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-10-b",
          "option_text": "Roll-Pitch-Yaw (RPY) Euler angles",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-10-c",
          "option_text": "Direction cosine matrix with Euler ZYZ angles",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-10-d",
          "option_text": "Axis-angle representation with zero modulus",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-11",
      "question_text": "In multi-link serial robot kinematics, what standardized four-parameter mathematical convention systematically establishes coordinate reference frames on each joint link?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-11-a",
          "option_text": "Denavit-Hartenberg (DH) Parameters (link length a, link twist alpha, link offset d, joint angle theta)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-11-b",
          "option_text": "Euler-Rodrigues vector transformations",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-11-c",
          "option_text": "Screw Theory twists and wrenches alone",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-11-d",
          "option_text": "Cartesian quaternion state vectors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-12",
      "question_text": "In mobile robotics autonomous navigation, which computational challenge involves a robot constructing a map of an unknown environment while simultaneously tracking its own position within that map?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-12-a",
          "option_text": "Simultaneous Localization and Mapping (SLAM)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-12-b",
          "option_text": "Open-loop dead reckoning odometry",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-12-c",
          "option_text": "Static Dijkstra grid searching",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-12-d",
          "option_text": "PID speed cruise control",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-13",
      "question_text": "In high-precision industrial robotics (like robotic arm joints), what type of compact gearbox provides zero-backlash, high single-stage gear reduction ratios, and high torque capacity using an elliptical wave generator and flexspline?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-13-a",
          "option_text": "Harmonic Drive (Strain Wave Gearing)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-13-b",
          "option_text": "Spur gear transmission set",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-13-c",
          "option_text": "Bevel gear differential set",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-13-d",
          "option_text": "Standard worm drive assembly",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-14",
      "question_text": "In closed-loop robot control systems, what does the 'Integral' term in a PID controller eliminate that a pure Proportional controller cannot?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-14-a",
          "option_text": "Steady-state tracking error",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-14-b",
          "option_text": "High-frequency sensor noise",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-14-c",
          "option_text": "Overshoot on initial step response",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-14-d",
          "option_text": "Actuator saturation limits",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-15",
      "question_text": "In mobile robot kinematic modeling, what two-wheeled drive configuration steers a platform by independently varying the rotational speeds of its left and right drive wheels?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-15-a",
          "option_text": "Differential Drive System",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-15-b",
          "option_text": "Ackermann Steering Geometry (car steering)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-15-c",
          "option_text": "Omnidirectional Mecanum Drive with 45-degree rollers",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-15-d",
          "option_text": "Articulated chassis center pivot",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-16",
      "question_text": "In industrial robotic manipulators, which mathematical matrix relates joint velocities to the resulting linear and angular velocities of the robot end-effector in Cartesian space?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-16-a",
          "option_text": "The Geometric Jacobian Matrix",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-16-b",
          "option_text": "The Mass / Inertia Tensor Matrix",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-16-c",
          "option_text": "The Homogeneous Translation Vector",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-16-d",
          "option_text": "The Stiffness compliance matrix",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-17",
      "question_text": "In modern Robot Operating System 2 (ROS 2), what standardized peer-to-peer data connectivity framework replaces the centralized master node architecture of ROS 1 for reliable real-time communication?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-17-a",
          "option_text": "DDS (Data Distribution Service)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-17-b",
          "option_text": "Raw TCP socket broadcasting",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-17-c",
          "option_text": "HTTP/1.1 RESTful web APIs",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-17-d",
          "option_text": "Serial RS-232 UART loopback",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-18",
      "question_text": "In robotic sensor fusion, which recursive estimation algorithm estimates the optimal state of a non-linear dynamical system by linearizing about the current estimate using Taylor series expansion?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-18-a",
          "option_text": "Extended Kalman Filter (EKF)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-18-b",
          "option_text": "Standard Linear Kalman Filter (LKF)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-18-c",
          "option_text": "Simple moving average window",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-18-d",
          "option_text": "Static lookup table interpolation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-19",
      "question_text": "Under international safety standards for collaborative robots (ISO/TS 15066 and ISO 10218), what capability allows a cobot to work alongside human operators without physical safety cages?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-19-a",
          "option_text": "Power and Force Limiting (PFL) with integrated torque sensors detecting contact and stopping instantaneously",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-19-b",
          "option_text": "Operating at maximum industrial speed regardless of human proximity",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-19-c",
          "option_text": "Disabling all emergency stop buttons during production",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-19-d",
          "option_text": "Replacing electric servo motors with hydraulic rams",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-20",
      "question_text": "In robotic arm trajectory generation, which polynomial interpolation curve ensures continuous position, velocity, and acceleration (zero jerk at endpoints) for smooth vibration-free arm movement?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-20-a",
          "option_text": "Quintic (5th-degree) Polynomial Spline",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-20-b",
          "option_text": "Linear ramp trajectory",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-20-c",
          "option_text": "Quadratic step function",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-20-d",
          "option_text": "Bang-bang discontinuous acceleration curve",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-21",
      "question_text": "In autonomous mobile robots (AMRs), which sensor technology measures distances by emitting pulsed laser light and calculating the time of flight (ToF) of reflected photon pulses?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-21-a",
          "option_text": "LiDAR (Light Detection and Ranging)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-21-b",
          "option_text": "Ultrasonic sonar transducer",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-21-c",
          "option_text": "Infrared break-beam photodiode",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-21-d",
          "option_text": "Capacitive proximity sensor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-22",
      "question_text": "What singular condition occurs in a 6-axis articulated robotic arm when its Jacobian matrix loses rank, causing the robot to lose degrees of freedom in certain Cartesian directions?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-22-a",
          "option_text": "Kinematic Singularity (such as wrist, elbow, or shoulder singularity)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-22-b",
          "option_text": "Actuator thermal overload shutdown",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-22-c",
          "option_text": "Battery voltage brownout",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-22-d",
          "option_text": "Mechanical gear tooth shear",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-23",
      "question_text": "In robotic gripping and manipulation of delicate, irregularly shaped, or fragile objects (like agricultural produce), which modern technology utilizes flexible elastomeric chambers actuated by pneumatic fluid pressure?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-23-a",
          "option_text": "Soft Robotic Grippers (Pneumatic Network Actuators)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-23-b",
          "option_text": "High-pressure hydraulic clamping jaws",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-23-c",
          "option_text": "Electromagnetic iron plate chucks",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-23-d",
          "option_text": "Hardened steel vise jaws",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-24",
      "question_text": "In high-rate servo drive feedback, what rotary feedback device generates pulses from a slotted optical disk to determine motor shaft angular velocity and relative position incrementally?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-24-a",
          "option_text": "Optical Incremental Rotary Encoder",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-24-b",
          "option_text": "Linear variable differential transformer (LVDT)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-24-c",
          "option_text": "Strain gauge load cell",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-24-d",
          "option_text": "Thermocouple probe",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-25",
      "question_text": "In robotic force and compliance control during assembly operations (such as peg-in-hole insertion), what sensor mounted between the robot tool flange and end-effector measures multi-axis forces and moments?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-25-a",
          "option_text": "6-Axis Force / Torque (F/T) Sensor",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-25-b",
          "option_text": "Single-axis tactile micro-switch",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-25-c",
          "option_text": "Hall-effect current sensing shunt",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-25-d",
          "option_text": "Optical CMOS camera sensor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-26",
      "question_text": "In autonomous ground vehicles and drones, what multi-sensor package integrates 3-axis gyroscopes, 3-axis accelerometers, and 3-axis magnetometers to calculate angular velocity and orientation?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-26-a",
          "option_text": "Inertial Measurement Unit (IMU)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-26-b",
          "option_text": "Wheel speed tachometer",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-26-c",
          "option_text": "Barometric altimeter alone",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-26-d",
          "option_text": "Thermistor junction array",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-27",
      "question_text": "In industrial robotics specifications, what parameter measures the ability of a robotic manipulator to return to the exact same commanded position repeatedly under identical conditions?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-27-a",
          "option_text": "Repeatability (typically +/- 0.02 mm)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-27-b",
          "option_text": "Absolute Accuracy in global CAD space",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-27-c",
          "option_text": "Payload carrying capacity in kg",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-27-d",
          "option_text": "Maximum joint reach radius",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-28",
      "question_text": "In autonomous mobile robot local motion planning, which algorithm evaluates admissible translational and rotational velocity pairs in velocity space to navigate around dynamic obstacles without collision?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-28-a",
          "option_text": "Dynamic Window Approach (DWA)",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-28-b",
          "option_text": "Depth-First Search (DFS)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-28-c",
          "option_text": "Breadth-First Search (BFS)",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-28-d",
          "option_text": "Linear programming simplex method",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-29",
      "question_text": "In computer vision for robotics, what 2D planar fiducial markers with wide black borders and embedded binary code matrices are used for fast, robust 6-DoF camera-to-target pose estimation?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-29-a",
          "option_text": "ArUco / AprilTag Fiducial Markers",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-29-b",
          "option_text": "Universal Product Code (UPC) retail barcodes",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-29-c",
          "option_text": "Standard QR codes without pose algorithms",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-29-d",
          "option_text": "Color lookup test charts",
          "is_correct": false
        }
      ]
    },
    {
      "id": "robotics-engineering-30",
      "question_text": "In quadcopter multi-rotor drone robotics, how does a drone execute a yaw rotation (turning left or right around its vertical z-axis) while maintaining a steady hover altitude?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "robotics-engineering-30-a",
          "option_text": "By accelerating two diagonally opposite clockwise rotors while decelerating the two counter-clockwise rotors, producing a net reactive torque imbalance",
          "is_correct": true
        },
        {
          "id": "robotics-engineering-30-b",
          "option_text": "By mechanically tilting all four motor shafts using mechanical servo linkages",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-30-c",
          "option_text": "By deploying aerodynamic airbrakes on one side",
          "is_correct": false
        },
        {
          "id": "robotics-engineering-30-d",
          "option_text": "By reversing the polarity of all four brushless motors simultaneously",
          "is_correct": false
        }
      ]
    }
  ],
  "petroleum-engineering": [
    {
      "id": "petroleum-engineering-1",
      "question_text": "In reservoir engineering, which fundamental empirical relationship governs the flow of a single-phase fluid through a porous rock medium?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-1-a",
          "option_text": "Darcy's Law",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-1-b",
          "option_text": "Fick's Second Law",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-1-c",
          "option_text": "Navier-Stokes Equation for viscous free flow",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-1-d",
          "option_text": "Bernoulli's Conservation Equation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-2",
      "question_text": "What primary reservoir drive mechanism typically yields the highest ultimate oil recovery percentage (35% to 75%) without artificial stimulation?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-2-a",
          "option_text": "Active bottom or edge water drive",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-2-b",
          "option_text": "Solution gas drive (depletion drive)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-2-c",
          "option_text": "Gas cap expansion drive",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-2-d",
          "option_text": "Rock and fluid expansion (compaction drive)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-3",
      "question_text": "In well drilling operations, what critical property of bentonite-based drilling mud enables it to suspend drilled rock cuttings when circulation stops?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-3-a",
          "option_text": "Thixotropy and gel strength formation at rest",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-3-b",
          "option_text": "Low specific gravity and high thermal conductivity",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-3-c",
          "option_text": "Zero plastic viscosity and Newtonian behavior",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-3-d",
          "option_text": "Negative hydrostatic pressure gradient",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-4",
      "question_text": "What well control equipment is installed at the wellhead to shear the drill pipe and completely seal the wellbore during an uncontrolled kick blowout?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-4-a",
          "option_text": "Blind shear rams on the Blowout Preventer (BOP) stack",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-4-b",
          "option_text": "Annular blowout preventer rubber packing element",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-4-c",
          "option_text": "Choke manifold adjustable needle orifice valve",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-4-d",
          "option_text": "Rotary kelly bushing locking slips",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-5",
      "question_text": "In petroleum well logging, what does a spontaneous potential (SP) log curve deflection primarily differentiate in permeable formations?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-5-a",
          "option_text": "Permeable sandstone/limestone beds from impermeable shales",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-5-b",
          "option_text": "Hydrocarbon density from formation water resistivity",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-5-c",
          "option_text": "Borehole caliper diameter changes across washouts",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-5-d",
          "option_text": "Natural formation radioactivity from thorium and potassium",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-6",
      "question_text": "What dimensionless number or metric is used by the American Petroleum Institute to measure how heavy or light a petroleum liquid is compared to water?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-6-a",
          "option_text": "API Gravity (degrees API)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-6-b",
          "option_text": "Specific Surface Retention Index",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-6-c",
          "option_text": "Flash Point Boiling Index",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-6-d",
          "option_text": "Cetane Number Rating",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-7",
      "question_text": "In hydraulic fracturing stimulation, what is the primary mechanical function of ceramic or sand proppant?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-7-a",
          "option_text": "To hold induced hydraulic fractures open after injection pressure is released, preserving high conductive permeability",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-7-b",
          "option_text": "To dissolve tight shale rock matrix using exothermic acid reactions",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-7-c",
          "option_text": "To seal off natural fault lines preventing hydrocarbon migration into the wellbore",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-7-d",
          "option_text": "To cool bottom-hole temperatures during high-rate slickwater pumping",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-8",
      "question_text": "Which Enhanced Oil Recovery (EOR) technique involves injecting surfactants and polymers to reduce interfacial tension and increase sweep efficiency?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-8-a",
          "option_text": "Chemical EOR (Surfactant-Polymer flooding)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-8-b",
          "option_text": "Thermal cyclic steam stimulation (Huff and Puff)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-8-c",
          "option_text": "Miscible carbon dioxide (CO2) huff-and-puff",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-8-d",
          "option_text": "In-situ combustion (fire flooding)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-9",
      "question_text": "In artificial lift design, which system utilizes downhole multi-stage centrifugal impellers driven by an electric motor connected to a surface power cable?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-9-a",
          "option_text": "Electrical Submersible Pump (ESP)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-9-b",
          "option_text": "Sucker rod beam pumping unit (Pumpjack)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-9-c",
          "option_text": "Continuous gas lift injection through mandrel valves",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-9-d",
          "option_text": "Hydraulic jet venturi pump",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-10",
      "question_text": "What is the bubble point pressure (Pb) of a crude oil reservoir fluid at a given reservoir temperature?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-10-a",
          "option_text": "The pressure at which the first infinitesimal bubble of gas comes out of solution from the liquid oil phase",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-10-b",
          "option_text": "The pressure at which all liquid oil vaporizes completely into dry gas",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-10-c",
          "option_text": "The hydrostatic pressure exerted by a column of freshwater at reservoir depth",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-10-d",
          "option_text": "The fracture breakdown pressure of the caprock overlying the reservoir",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-11",
      "question_text": "In reservoir engineering, which fundamental law governs the single-phase laminar flow of fluid through porous rock media, relating flow rate to permeability, fluid viscosity, and pressure gradient?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-11-a",
          "option_text": "Darcy's Law",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-11-b",
          "option_text": "Poiseuille's Capillary Flow Equation",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-11-c",
          "option_text": "Bernoulli's Frictionless Energy Equation",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-11-d",
          "option_text": "Navier-Stokes Turbulent Flow Formulation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-12",
      "question_text": "In borehole petrophysical logging, what open-hole log measures natural radioactivity to distinguish impermeable clay-rich shale formations from permeable sandstone and carbonate reservoirs?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-12-a",
          "option_text": "Gamma Ray Log",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-12-b",
          "option_text": "Density Log using gamma-gamma Compton scattering",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-12-c",
          "option_text": "Neutron Porosity Log",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-12-d",
          "option_text": "Deep Induction Resistivity Log",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-13",
      "question_text": "In petroleum drilling operations, what critical safety equipment mounted on the wellhead contains hydraulic annular and ram preventers to seal the wellbore and prevent an uncontrolled blowout?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-13-a",
          "option_text": "Blowout Preventer (BOP) Stack",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-13-b",
          "option_text": "Rotary table master bushing",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-13-c",
          "option_text": "Top drive motor assembly",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-13-d",
          "option_text": "Mud-gas separator degasser",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-14",
      "question_text": "In reservoir fluid thermodynamics (PVT analysis), what pressure marks the threshold below which dissolved natural gas begins to liberate out of solution from crude oil as a free gas phase?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-14-a",
          "option_text": "Bubble Point Pressure (Saturation Pressure)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-14-b",
          "option_text": "Dew Point Pressure",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-14-c",
          "option_text": "Critical Condensation Pressure",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-14-d",
          "option_text": "Hydrostatic Wellbore Pressure",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-15",
      "question_text": "In petrophysics, what empirical formula developed by G.E. Archie relates rock electrical resistivity, porosity, and brine resistivity to calculate hydrocarbon saturation (Sw) in uninvaded clean formations?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-15-a",
          "option_text": "Archie's Equation",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-15-b",
          "option_text": "Kozeny-Carman Porosity-Permeability Equation",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-15-c",
          "option_text": "Ergun Packed-Bed Friction Equation",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-15-d",
          "option_text": "Waxman-Smits Shaly Sand Equation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-16",
      "question_text": "In drilling mud engineering, what synthetic or natural swelling clay mineral is added to water-based drilling muds to build viscosity, provide gel strength, and form an impermeable filter cake on borehole walls?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-16-a",
          "option_text": "Sodium Bentonite (Montmorillonite)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-16-b",
          "option_text": "Calcium Carbonate Barite weighting agent",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-16-c",
          "option_text": "Barium Sulfate (Barite) only",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-16-d",
          "option_text": "Potassium Chloride brine salt",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-17",
      "question_text": "In petroleum production engineering, what graphical analysis combines the Inflow Performance Relationship (IPR) of the reservoir with the Vertical Lift Performance (VLP) of the tubing to determine the operating production flow rate?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-17-a",
          "option_text": "Nodal Analysis (System Analysis)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-17-b",
          "option_text": "Decline Curve Semi-Log Plotting",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-17-c",
          "option_text": "Material Balance p/z plot",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-17-d",
          "option_text": "Pressure Transient Horner Plot",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-18",
      "question_text": "What artificial lift system utilizes an electric motor, protector, intake, and multi-stage centrifugal pump submerged at the bottom of the production tubing to lift high volumes of fluid to surface?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-18-a",
          "option_text": "Electric Submersible Pump (ESP)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-18-b",
          "option_text": "Sucker Rod Pump (Beam Pumping Unit / Pumpjack)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-18-c",
          "option_text": "Progressing Cavity Pump (PCP)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-18-d",
          "option_text": "Plunger Lift System",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-19",
      "question_text": "In Enhanced Oil Recovery (EOR), which thermal recovery method injects high-pressure steam into an upper horizontal well to heat viscous bitumen, allowing it to drain into a lower parallel production well by gravity?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-19-a",
          "option_text": "Steam-Assisted Gravity Drainage (SAGD)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-19-b",
          "option_text": "Miscible CO2 Gas Injection Flooding",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-19-c",
          "option_text": "Polymer Gel Waterflood Sweep",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-19-d",
          "option_text": "Microbial In-Situ Fermentation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-20",
      "question_text": "In offshore deepwater oil and gas developments, what floating vessel is equipped with processing facilities to receive hydrocarbons from subsea wells, treat them, store crude in its hull, and offload to shuttle tankers?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-20-a",
          "option_text": "FPSO (Floating Production Storage and Offloading) Vessel",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-20-b",
          "option_text": "Fixed Jacket Offshore Platform",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-20-c",
          "option_text": "Jack-Up Exploration Rig",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-20-d",
          "option_text": "Tension Leg Platform (TLP)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-21",
      "question_text": "In hydraulic fracturing of unconventional tight shale reservoirs, what spherical granular material (such as treated quartz silica sand or ceramic beads) is pumped with fracture fluid to hold open induced fractures?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-21-a",
          "option_text": "Proppant",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-21-b",
          "option_text": "Friction Reducer Polymer",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-21-c",
          "option_text": "Biocide bactericide additive",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-21-d",
          "option_text": "Acid gel breaker",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-22",
      "question_text": "In reservoir production decline analysis, which empirical decline equations developed by J.J. Arps model hydrocarbon production rates using exponential, hyperbolic, or harmonic decline curves?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-22-a",
          "option_text": "Arps Decline Curve Equations",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-22-b",
          "option_text": "Navier-Stokes Navier Equations",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-22-c",
          "option_text": "Fick's Diffusion Law Equations",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-22-d",
          "option_text": "Arrhenius Reaction Kinetics Formula",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-23",
      "question_text": "In well test analysis, what dimensionless parameter represents the mechanical restriction to fluid flow caused by near-wellbore formation damage, mud invasion, or partial penetration (positive value) versus stimulation (negative value)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-23-a",
          "option_text": "Skin Factor (S)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-23-b",
          "option_text": "Tortuosity Coefficient (T)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-23-c",
          "option_text": "Cementation Exponent (m)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-23-d",
          "option_text": "Saturation Exponent (n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-24",
      "question_text": "In directional and horizontal drilling, which technology allows continuous rotation of the drill string while simultaneously steering the bit along a designated trajectory using internal hydraulic steering pads?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-24-a",
          "option_text": "Rotary Steerable Systems (RSS)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-24-b",
          "option_text": "Conventional Bent Housing Mud Motor in sliding mode",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-24-c",
          "option_text": "Whipstock wedge casing diverter",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-24-d",
          "option_text": "Cable-tool percussion drill string",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-25",
      "question_text": "In natural gas processing and flow assurance in deepwater pipelines, what solid crystalline ice-like compounds form at high pressures and low temperatures when water molecules trap light hydrocarbon gas molecules?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-25-a",
          "option_text": "Gas Hydrates (Clathrate Hydrates)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-25-b",
          "option_text": "Asphaltene precipitate sludge",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-25-c",
          "option_text": "Paraffin wax crystal deposits",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-25-d",
          "option_text": "Calcium carbonate scale crystals",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-26",
      "question_text": "In crude oil characterization, what standard measurement scale defined by the American Petroleum Institute evaluates how heavy or light a petroleum liquid is compared to water?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-26-a",
          "option_text": "API Gravity (degrees API)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-26-b",
          "option_text": "Baumé Specific Gravity Index",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-26-c",
          "option_text": "Saybolt Universal Seconds (SUS)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-26-d",
          "option_text": "Centipoise Dynamic Viscosity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-27",
      "question_text": "In deep well casing program design, which structural casing string is cemented from surface to protect shallow freshwater aquifers from drilling contamination and support subsequent BOP equipment?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-27-a",
          "option_text": "Surface Casing",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-27-b",
          "option_text": "Conductor Pipe (Drive Pipe)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-27-c",
          "option_text": "Intermediate Casing",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-27-d",
          "option_text": "Production Liner String",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-28",
      "question_text": "What well stimulation technique injects hydrochloric acid (HCl) or mud acid (HCl/HF) at pressures below the formation fracture pressure to dissolve carbonate minerals and bypass near-wellbore skin damage?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-28-a",
          "option_text": "Matrix Acidizing",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-28-b",
          "option_text": "Hydraulic Acid Fracturing",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-28-c",
          "option_text": "Solvent Vapor Extraction",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-28-d",
          "option_text": "Thermal Combustion Soak",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-29",
      "question_text": "In oil reservoir material balance, what parameter (Bo) expresses the ratio of the volume of crude oil at reservoir temperature and pressure to the volume of that same oil at standard surface conditions (STB)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-29-a",
          "option_text": "Oil Formation Volume Factor (FVF)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-29-b",
          "option_text": "Solution Gas-Oil Ratio (Rs)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-29-c",
          "option_text": "Gas Formation Volume Factor (Bg)",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-29-d",
          "option_text": "Total Isothermal Compressibility (Ct)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "petroleum-engineering-30",
      "question_text": "In deep offshore subsea production systems, what assembly of subsea valves, chokes, and monitoring instruments installed on a subsea wellhead controls the flow of hydrocarbons from the well into seabed flowlines?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "petroleum-engineering-30-a",
          "option_text": "Subsea Christmas Tree (Wet Tree)",
          "is_correct": true
        },
        {
          "id": "petroleum-engineering-30-b",
          "option_text": "Subsea Manifold Hub",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-30-c",
          "option_text": "Subsea Sump Caisson",
          "is_correct": false
        },
        {
          "id": "petroleum-engineering-30-d",
          "option_text": "Subsea Riser Base",
          "is_correct": false
        }
      ]
    }
  ],
  "marine-engineering": [
    {
      "id": "marine-engineering-1",
      "question_text": "In marine diesel propulsion engines, what is the primary thermodynamic cause of turbocharger surging during rapid engine load fluctuations?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-1-a",
          "option_text": "Flow separation on compressor impeller blades when mass flow rate drops below the critical surge limit at high pressure ratio",
          "is_correct": true
        },
        {
          "id": "marine-engineering-1-b",
          "option_text": "Excessive scavenging air cooling causing condensation in the cylinder liner",
          "is_correct": false
        },
        {
          "id": "marine-engineering-1-c",
          "option_text": "Delayed fuel injection timing causing afterburning in the exhaust manifold",
          "is_correct": false
        },
        {
          "id": "marine-engineering-1-d",
          "option_text": "Over-lubrication of the crosshead bearing assembly",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-2",
      "question_text": "Which international maritime regulation governs the standards for prevention of air pollution from ships, including NOx Tier III and SOx emissions?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-2-a",
          "option_text": "MARPOL Annex VI",
          "is_correct": true
        },
        {
          "id": "marine-engineering-2-b",
          "option_text": "SOLAS Chapter II-2",
          "is_correct": false
        },
        {
          "id": "marine-engineering-2-c",
          "option_text": "STCW Convention Section A-III",
          "is_correct": false
        },
        {
          "id": "marine-engineering-2-d",
          "option_text": "MARPOL Annex I",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-3",
      "question_text": "In naval architecture, what does the metacentric height (GM) measure directly regarding a vessel’s seaworthiness?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-3-a",
          "option_text": "Initial static transverse stability at small angles of heel",
          "is_correct": true
        },
        {
          "id": "marine-engineering-3-b",
          "option_text": "Total longitudinal bending moment in hogging condition",
          "is_correct": false
        },
        {
          "id": "marine-engineering-3-c",
          "option_text": "Dynamic resistance of the bulbous bow in open seaway",
          "is_correct": false
        },
        {
          "id": "marine-engineering-3-d",
          "option_text": "Propeller pitch ratio efficiency at design speed",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-4",
      "question_text": "What dangerous phenomenon occurs when local static pressure on a marine propeller blade drops below the saturated vapor pressure of seawater?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-4-a",
          "option_text": "Cavitation, causing blade surface erosion, vibration, and loss of thrust",
          "is_correct": true
        },
        {
          "id": "marine-engineering-4-b",
          "option_text": "Galvanic corrosion between bronze propeller and steel hull",
          "is_correct": false
        },
        {
          "id": "marine-engineering-4-c",
          "option_text": "Thermal blooming of the stern tube bearing white metal",
          "is_correct": false
        },
        {
          "id": "marine-engineering-4-d",
          "option_text": "Hydrodynamic squat in shallow water fairways",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-5",
      "question_text": "In ship auxiliary systems, what is the regulatory maximum oil content permitted in bilge water discharged overboard through an Oily Water Separator (OWS)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-5-a",
          "option_text": "15 parts per million (ppm)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-5-b",
          "option_text": "50 parts per million (ppm)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-5-c",
          "option_text": "100 parts per million (ppm)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-5-d",
          "option_text": "5 parts per million (ppm)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-6",
      "question_text": "What type of steering gear system utilizes hydraulic rams controlled by telemotor signals to turn the rudder stock?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-6-a",
          "option_text": "Electro-hydraulic ram type steering gear with hunting gear feedback",
          "is_correct": true
        },
        {
          "id": "marine-engineering-6-b",
          "option_text": "Mechanical rack-and-pinion cable steering",
          "is_correct": false
        },
        {
          "id": "marine-engineering-6-c",
          "option_text": "Pneumatic vane actuator with open-loop solenoid control",
          "is_correct": false
        },
        {
          "id": "marine-engineering-6-d",
          "option_text": "Direct electric chain drive steering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-7",
      "question_text": "How does an impressed current cathodic protection (ICCP) system prevent galvanic hull corrosion in ocean-going vessels?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-7-a",
          "option_text": "By supplying a controlled direct electrical current from auxiliary power to inert anodes mounted on the hull",
          "is_correct": true
        },
        {
          "id": "marine-engineering-7-b",
          "option_text": "By coating the hull exclusively with sacrificial zinc blocks along the keel",
          "is_correct": false
        },
        {
          "id": "marine-engineering-7-c",
          "option_text": "By circulating hot freshwater through the sea chest strainers",
          "is_correct": false
        },
        {
          "id": "marine-engineering-7-d",
          "option_text": "By grounding the ship electrical system to the propeller shaft slip rings",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-8",
      "question_text": "In marine boiler water chemistry, what is the primary risk of high chloride contamination in feed water?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-8-a",
          "option_text": "Severe pitting corrosion and stress corrosion cracking of boiler tubes",
          "is_correct": true
        },
        {
          "id": "marine-engineering-8-b",
          "option_text": "Excessive alkalinity causing caustic gouging of soot blowers",
          "is_correct": false
        },
        {
          "id": "marine-engineering-8-c",
          "option_text": "Formation of non-conductive magnetite protective films",
          "is_correct": false
        },
        {
          "id": "marine-engineering-8-d",
          "option_text": "Thermal shock to the superheater steam headers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-9",
      "question_text": "What is the purpose of the emergency generator on commercial merchant vessels under SOLAS Chapter II-1?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-9-a",
          "option_text": "To supply essential power to navigation aids, emergency lighting, steering gear, and fire pumps within 45 seconds of blackout",
          "is_correct": true
        },
        {
          "id": "marine-engineering-9-b",
          "option_text": "To assist main engine propulsion during heavy sea state maneuvers",
          "is_correct": false
        },
        {
          "id": "marine-engineering-9-c",
          "option_text": "To charge ship battery banks during normal harbour dry-dock operations",
          "is_correct": false
        },
        {
          "id": "marine-engineering-9-d",
          "option_text": "To power the galley and crew accommodation air conditioning systems during sea trials",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-10",
      "question_text": "In marine shafting systems, what device prevents seawater from entering the engine room along the rotating propeller shaft?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-10-a",
          "option_text": "Stern tube seal assembly (lip seals with oil barrier pressure)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-10-b",
          "option_text": "Centrifugal sea water ballast valve",
          "is_correct": false
        },
        {
          "id": "marine-engineering-10-c",
          "option_text": "Intermediate thrust block bearing casing",
          "is_correct": false
        },
        {
          "id": "marine-engineering-10-d",
          "option_text": "Coupling flange alignment shim",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-11",
      "question_text": "In commercial naval architecture, what vertical distance between the center of gravity (G) and the transverse metacenter (M) governs the initial static stability and righting moment of a ship at small angles of heel?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-11-a",
          "option_text": "Transverse Metacentric Height (GM)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-11-b",
          "option_text": "Center of Buoyancy (KB)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-11-c",
          "option_text": "Keel to Metacenter Distance (KM)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-11-d",
          "option_text": "Freeboard draught margin",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-12",
      "question_text": "In large ocean-going container vessels and crude oil tankers, which prime mover directly drives a fixed-pitch propeller at low rotational speeds (typically 60 to 100 RPM) with thermal efficiencies exceeding 50%?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-12-a",
          "option_text": "Low-Speed Two-Stroke Crosshead Diesel Engine",
          "is_correct": true
        },
        {
          "id": "marine-engineering-12-b",
          "option_text": "High-Speed Four-Stroke Trunk Piston Engine",
          "is_correct": false
        },
        {
          "id": "marine-engineering-12-c",
          "option_text": "Aviation Aeroderivative Gas Turbine",
          "is_correct": false
        },
        {
          "id": "marine-engineering-12-d",
          "option_text": "Triple-Expansion Reciprocating Steam Engine",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-13",
      "question_text": "Under international maritime environmental regulations (MARPOL Annex I), what is the maximum allowable oil content for bilge water discharge into the sea via an approved Oily Water Separator (OWS) and 15 ppm bilge alarm?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-13-a",
          "option_text": "15 parts per million (15 ppm)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-13-b",
          "option_text": "100 parts per million (100 ppm)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-13-c",
          "option_text": "50 parts per million (50 ppm)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-13-d",
          "option_text": "0 parts per million (Zero discharge permitted anywhere)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-14",
      "question_text": "In marine hull hydrodynamics, what dimensionless number represents the ratio of a vessel's inertial forces to gravitational wave-making forces, used to quantify wave resistance across ship speeds?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-14-a",
          "option_text": "Froude Number (Fn)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-14-b",
          "option_text": "Reynolds Number (Rn)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-14-c",
          "option_text": "Mach Number",
          "is_correct": false
        },
        {
          "id": "marine-engineering-14-d",
          "option_text": "Euler Cavitation Number",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-15",
      "question_text": "To protect a steel ship hull from galvanic corrosion in seawater, what active electronic system supplies protective direct electrical current from auxiliary DC power through inert titanium anodes mounted on the hull?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-15-a",
          "option_text": "Impressed Current Cathodic Protection (ICCP)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-15-b",
          "option_text": "Passive zinc sacrificial block anodes alone",
          "is_correct": false
        },
        {
          "id": "marine-engineering-15-c",
          "option_text": "Electroless nickel-boron plating",
          "is_correct": false
        },
        {
          "id": "marine-engineering-15-d",
          "option_text": "Anodized polyurethane paint coating",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-16",
      "question_text": "Under the IMO Ballast Water Management Convention (BWM Standard D-2), what dual-stage treatment process is widely installed aboard merchant ships to eliminate aquatic invasive species in ballast tanks?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-16-a",
          "option_text": "Mechanical filtration followed by Ultraviolet (UV) irradiation or Electrochlorination",
          "is_correct": true
        },
        {
          "id": "marine-engineering-16-b",
          "option_text": "Boiling ballast water using waste exhaust heat",
          "is_correct": false
        },
        {
          "id": "marine-engineering-16-c",
          "option_text": "Adding concentrated hydrochloric acid to ballast tanks",
          "is_correct": false
        },
        {
          "id": "marine-engineering-16-d",
          "option_text": "Ultrasonic sound blasting in sea chests alone",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-17",
      "question_text": "In marine propulsion plants, what waste heat recovery equipment installed in the diesel engine exhaust uptake generates auxiliary steam while the vessel is underway at sea?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-17-a",
          "option_text": "Exhaust Gas Economizer (Waste Heat Boiler)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-17-b",
          "option_text": "Auxiliary Oil-Fired Package Boiler",
          "is_correct": false
        },
        {
          "id": "marine-engineering-17-c",
          "option_text": "Charge Air Cooler Radiator",
          "is_correct": false
        },
        {
          "id": "marine-engineering-17-d",
          "option_text": "Jacket Water Expansion Tank",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-18",
      "question_text": "In marine heavy fuel oil (HFO) treatment systems, what high-speed centrifugal separation equipment continuously removes water and abrasive catalytic fines (aluminum and silicon oxides) prior to engine combustion?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-18-a",
          "option_text": "Centrifugal Fuel Purifier (Centrifuge)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-18-b",
          "option_text": "Static gravity settling filter basket",
          "is_correct": false
        },
        {
          "id": "marine-engineering-18-c",
          "option_text": "Magnetic duplex wire strainer",
          "is_correct": false
        },
        {
          "id": "marine-engineering-18-d",
          "option_text": "Coalescing cartridge element",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-19",
      "question_text": "On a commercial ship steering gear system, what dual-circuit hydraulic mechanism turns the heavy rudder stock in response to bridge helm commands under SOLAS regulations?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-19-a",
          "option_text": "Electro-Hydraulic Steering Gear (Ram type or Rotary Vane type)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-19-b",
          "option_text": "Pneumatic air cylinder winch",
          "is_correct": false
        },
        {
          "id": "marine-engineering-19-c",
          "option_text": "Direct mechanical wire cable steering chain",
          "is_correct": false
        },
        {
          "id": "marine-engineering-19-d",
          "option_text": "Manual geared worm rack",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-20",
      "question_text": "In marine diesel engine crankshaft dynamics, what device mounted on the free end of the crankshaft suppresses torsional vibration stress spikes to prevent fatigue failure of the crankshaft?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-20-a",
          "option_text": "Torsional Vibration Damper (Viscous or Geislinger spring type)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-20-b",
          "option_text": "Engine turning gear motor",
          "is_correct": false
        },
        {
          "id": "marine-engineering-20-c",
          "option_text": "Flywheel barring ring",
          "is_correct": false
        },
        {
          "id": "marine-engineering-20-d",
          "option_text": "Piston rod crosshead guide shoe",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-21",
      "question_text": "In marine propeller performance, what hydrodynamic phenomenon causes localized boiling of seawater into vapor bubbles on propeller blade surfaces due to extreme low pressure, leading to pitting erosion and noise?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-21-a",
          "option_text": "Propeller Cavitation",
          "is_correct": true
        },
        {
          "id": "marine-engineering-21-b",
          "option_text": "Boundary layer laminar flow separation",
          "is_correct": false
        },
        {
          "id": "marine-engineering-21-c",
          "option_text": "Hull wake friction shear",
          "is_correct": false
        },
        {
          "id": "marine-engineering-21-d",
          "option_text": "Hydraulic water hammer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-22",
      "question_text": "In emergency shipboard operations, which independent valve allows the main seawater cooling circulating pump to draw water directly from the engine room bilge during catastrophic hull flooding?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-22-a",
          "option_text": "Emergency Bilge Suction Valve (Bilge Injection Valve)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-22-b",
          "option_text": "High Sea Chest intake valve",
          "is_correct": false
        },
        {
          "id": "marine-engineering-22-c",
          "option_text": "Low Sea Chest intake valve",
          "is_correct": false
        },
        {
          "id": "marine-engineering-22-d",
          "option_text": "Overboard overboard discharge valve",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-23",
      "question_text": "Under IMO MARPOL Annex VI regulations, what is the global sulfur cap limit for marine fuel oil used outside designated Emission Control Areas (ECAs) unless an approved exhaust gas cleaning scrubber is operated?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-23-a",
          "option_text": "0.50% m/m (mass by mass)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-23-b",
          "option_text": "0.10% m/m (ECA zone limit)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-23-c",
          "option_text": "3.50% m/m (historical baseline)",
          "is_correct": false
        },
        {
          "id": "marine-engineering-23-d",
          "option_text": "1.00% m/m",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-24",
      "question_text": "In ship machinery spaces, which fire extinguishing system is designed for total flooding of the entire engine room space to extinguish catastrophic class B flammable liquid fuel fires?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-24-a",
          "option_text": "High-Pressure Carbon Dioxide (CO2) Total Flooding System",
          "is_correct": true
        },
        {
          "id": "marine-engineering-24-b",
          "option_text": "Portable dry powder cartridge extinguisher",
          "is_correct": false
        },
        {
          "id": "marine-engineering-24-c",
          "option_text": "Fixed seawater sprinkler deluge system",
          "is_correct": false
        },
        {
          "id": "marine-engineering-24-d",
          "option_text": "Compressed natural air foam cannon",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-25",
      "question_text": "In marine stern tube assemblies, what bearings support the propeller shaft and maintain a watertight seal where the shaft exits the hull into open sea?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-25-a",
          "option_text": "Stern Tube Bearings (white-metal lined or water-lubricated non-metallic bearings) and Face Seals",
          "is_correct": true
        },
        {
          "id": "marine-engineering-25-b",
          "option_text": "Standard automotive tapered roller bearings",
          "is_correct": false
        },
        {
          "id": "marine-engineering-25-c",
          "option_text": "Unsealed ball journal bearings",
          "is_correct": false
        },
        {
          "id": "marine-engineering-25-d",
          "option_text": "Flexible neoprene expansion bellows only",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-26",
      "question_text": "Onboard modern merchant vessels, which freshwater generation system utilizes waste heat from the main engine jacket cooling water (at ~80°C) under high vacuum to boil seawater at low temperatures?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-26-a",
          "option_text": "Vacuum Flash / Plate-Type Freshwater Evaporator",
          "is_correct": true
        },
        {
          "id": "marine-engineering-26-b",
          "option_text": "High-pressure reverse osmosis membrane rack alone",
          "is_correct": false
        },
        {
          "id": "marine-engineering-26-c",
          "option_text": "Solar thermal distillation trough",
          "is_correct": false
        },
        {
          "id": "marine-engineering-26-d",
          "option_text": "Atmospheric steam heating kettle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-27",
      "question_text": "Under SOLAS maritime safety standards, what is the maximum time allowed for the ship emergency diesel generator (EDG) to automatically start, connect to the emergency switchboard, and supply critical safety loads following a total blackout?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-27-a",
          "option_text": "45 seconds",
          "is_correct": true
        },
        {
          "id": "marine-engineering-27-b",
          "option_text": "5 minutes",
          "is_correct": false
        },
        {
          "id": "marine-engineering-27-c",
          "option_text": "10 minutes",
          "is_correct": false
        },
        {
          "id": "marine-engineering-27-d",
          "option_text": "30 seconds",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-28",
      "question_text": "In large container ships and LNG carriers with massive electrical distribution requirements, what electrical system voltage is standardly used for main generators and bow thruster motors to reduce cable cross-sections and copper weight?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-28-a",
          "option_text": "Medium / High Voltage (6.6 kV or 11 kV AC)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-28-b",
          "option_text": "Low voltage 440 V 3-phase 60 Hz",
          "is_correct": false
        },
        {
          "id": "marine-engineering-28-c",
          "option_text": "Standard domestic 230 V 50 Hz",
          "is_correct": false
        },
        {
          "id": "marine-engineering-28-d",
          "option_text": "Low voltage 110 V DC battery bank",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-29",
      "question_text": "In two-stroke marine crosshead diesel engines, which structural component transfers the linear reciprocating force from the piston rod to the oscillating connecting rod while absorbing high side-thrust forces against the engine frame?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-29-a",
          "option_text": "The Crosshead Assembly (Crosshead pin and guide shoes)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-29-b",
          "option_text": "The Gudgeon wrist pin inside the piston skirt",
          "is_correct": false
        },
        {
          "id": "marine-engineering-29-c",
          "option_text": "The Crankshaft thrust collar bearing",
          "is_correct": false
        },
        {
          "id": "marine-engineering-29-d",
          "option_text": "The Cylinder liner scavenge port ring",
          "is_correct": false
        }
      ]
    },
    {
      "id": "marine-engineering-30",
      "question_text": "What ship maneuvering propulsion unit mounted in a transverse tunnel at the forward bow of a vessel provides lateral thrust to assist docking without requiring tugboats?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "marine-engineering-30-a",
          "option_text": "Bow Thruster (Tunnel Thruster)",
          "is_correct": true
        },
        {
          "id": "marine-engineering-30-b",
          "option_text": "Main center-line rudder blade",
          "is_correct": false
        },
        {
          "id": "marine-engineering-30-c",
          "option_text": "Stern azipod main pod",
          "is_correct": false
        },
        {
          "id": "marine-engineering-30-d",
          "option_text": "Kort nozzle shroud",
          "is_correct": false
        }
      ]
    }
  ],
  "chemical-engineering": [
    {
      "id": "chemical-engineering-1",
      "question_text": "In a continuous distillation column operating at steady state, what does a reflux ratio of infinity correspond to in the McCabe-Thiele analysis?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-1-a",
          "option_text": "Total reflux operation yielding the minimum number of theoretical stages with zero net product withdrawal",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-1-b",
          "option_text": "Minimum reflux operation requiring an infinite number of theoretical stages",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-1-c",
          "option_text": "Flooding of the distillation column due to excessive vapor velocity",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-1-d",
          "option_text": "Complete weeping through the sieve trays into the reboiler",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-2",
      "question_text": "For an ideal binary solution undergoing vapor-liquid equilibrium (VLE), which fundamental thermodynamic law states that the partial vapor pressure of each component is equal to the product of its mole fraction in the liquid phase and its pure component saturation vapor pressure?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-2-a",
          "option_text": "Raoult's Law",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-2-b",
          "option_text": "Henry's Law",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-2-c",
          "option_text": "Amagat's Law of Partial Volumes",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-2-d",
          "option_text": "Dalton's Law of Additive Pressures",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-3",
      "question_text": "In chemical reaction engineering, which ideal reactor model is characterized by uniform concentration, temperature, and reaction rate throughout the entire reaction volume at steady state?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-3-a",
          "option_text": "Continuous Stirred Tank Reactor (CSTR)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-3-b",
          "option_text": "Plug Flow Reactor (PFR)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-3-c",
          "option_text": "Differential Packed Bed Reactor",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-3-d",
          "option_text": "Semi-batch Gas-Liquid Sparged Column",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-4",
      "question_text": "In heat transfer operations, what temperature difference metric accounts for the non-linear temperature profiles of hot and cold fluids along a counter-current heat exchanger?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-4-a",
          "option_text": "Logarithmic Mean Temperature Difference (LMTD)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-4-b",
          "option_text": "Arithmetic Mean Temperature Difference (AMTD)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-4-c",
          "option_text": "Geometric Mean Temperature Ratio (GMTR)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-4-d",
          "option_text": "Harmonic Mean Heat Flux Difference",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-5",
      "question_text": "What dimensionless number represents the ratio of convective mass transfer to molecular mass diffusivity in boundary layer mass transfer?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-5-a",
          "option_text": "Sherwood Number (Sh)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-5-b",
          "option_text": "Schmidt Number (Sc)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-5-c",
          "option_text": "Prandtl Number (Pr)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-5-d",
          "option_text": "Nusselt Number (Nu)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-6",
      "question_text": "What dimensionless number represents the ratio of momentum diffusivity (kinematic viscosity) to molecular mass diffusivity in chemical fluid transport?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-6-a",
          "option_text": "Schmidt Number (Sc)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-6-b",
          "option_text": "Lewis Number (Le)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-6-c",
          "option_text": "Biot Number (Bi)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-6-d",
          "option_text": "Peclet Number (Pe)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-7",
      "question_text": "In chemical process safety and hazard analysis, what structured, systematic team-based methodology uses guide words (such as NO, MORE, LESS, AS WELL AS) to identify process deviation risks?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-7-a",
          "option_text": "Hazard and Operability Study (HAZOP)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-7-b",
          "option_text": "Failure Mode and Effects Analysis (FMEA)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-7-c",
          "option_text": "Fault Tree Analysis (FTA)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-7-d",
          "option_text": "Layer of Protection Analysis (LOPA)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-8",
      "question_text": "What is the primary thermodynamic criterion for phase and chemical reaction equilibrium at constant temperature and pressure?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-8-a",
          "option_text": "The total Gibbs free energy of the system reaches a minimum (dG = 0)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-8-b",
          "option_text": "The total enthalpy of the system reaches zero (dH = 0)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-8-c",
          "option_text": "The system entropy decreases to zero",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-8-d",
          "option_text": "The Helmholtz free energy becomes positive infinite",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-9",
      "question_text": "In fluid mechanics applied to packed bed reactors and filtration units, which classic equation describes the pressure drop of fluid flowing through a porous packed bed over both laminar and turbulent regimes?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-9-a",
          "option_text": "Ergun Equation",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-9-b",
          "option_text": "Hagen-Poiseuille Equation",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-9-c",
          "option_text": "Colebrook-White Formula",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-9-d",
          "option_text": "Darcy-Weisbach Equation for Smooth Pipes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-10",
      "question_text": "In centrifugal pump operation within a chemical plant, what condition occurs when local static fluid pressure drops below the liquid's vapor pressure, causing vapor bubbles that collapse violently and erode the impeller?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-10-a",
          "option_text": "Cavitation",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-10-b",
          "option_text": "Hydraulic Hammer",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-10-c",
          "option_text": "Channeling",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-10-d",
          "option_text": "Boundary Layer Separation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-11",
      "question_text": "In gas absorption and stripping columns, what condition occurs when upward vapor velocity prevents downward liquid flow, causing liquid to accumulate and flood the column trays or packing?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-11-a",
          "option_text": "Flooding",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-11-b",
          "option_text": "Weeping",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-11-c",
          "option_text": "Entrainment",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-11-d",
          "option_text": "Coning",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-12",
      "question_text": "In heterogeneous catalysis, which dimensionless parameter compares the characteristic reaction rate inside a porous catalyst pellet to the internal pore diffusion rate?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-12-a",
          "option_text": "Thiele Modulus",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-12-b",
          "option_text": "Damkohler Number",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-12-c",
          "option_text": "Weisz-Prater Criterion",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-12-d",
          "option_text": "Hatta Number",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-13",
      "question_text": "For an isothermal irreversible first-order liquid-phase reaction, which statement correctly compares the required reactor volumes of a single CSTR versus a single PFR to achieve the same fractional conversion X?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-13-a",
          "option_text": "The CSTR requires a larger reactor volume than the PFR because the CSTR operates entirely at the lowest exit concentration",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-13-b",
          "option_text": "The PFR requires a larger reactor volume than the CSTR due to plug velocity profiles",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-13-c",
          "option_text": "Both reactors require the exact same volume regardless of reaction order",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-13-d",
          "option_text": "The CSTR requires a smaller volume because of continuous mechanical agitation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-14",
      "question_text": "In chemical process dynamics, which feedback control mode provides corrective action proportional to the rate of change of the controlled process error, adding anticipatory phase lead to stabilize sluggish loops?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-14-a",
          "option_text": "Derivative (D) Action",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-14-b",
          "option_text": "Integral (I) Action",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-14-c",
          "option_text": "Proportional (P) Offset",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-14-d",
          "option_text": "Inverse Response Feedforward",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-15",
      "question_text": "What classic graphical construction method uses a McCabe-Thiele diagram on an x-y equilibrium curve to step off the number of theoretical equilibrium stages for binary distillation?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-15-a",
          "option_text": "Stepping between the equilibrium curve, operating lines (rectifying and stripping), and the feed (q) line",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-15-b",
          "option_text": "Integrating the Fenske-Underwood-Gilliland shortcut equations graphically",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-15-c",
          "option_text": "Constructing tie-lines on a ternary equilateral Gibbs triangle",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-15-d",
          "option_text": "Plotting temperature versus log vapor pressure for pure components",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-16",
      "question_text": "In non-ideal solution thermodynamics, what property is defined as the ratio of a component's fugacity in solution to its mole fraction times its standard-state fugacity?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-16-a",
          "option_text": "Activity Coefficient (γ)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-16-b",
          "option_text": "Compressibility Factor (Z)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-16-c",
          "option_text": "Poynting Correction Factor",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-16-d",
          "option_text": "Acentric Factor (ω)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-17",
      "question_text": "Which transport law states that molar diffusion flux is directly proportional to the negative concentration gradient under steady-state molecular diffusion?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-17-a",
          "option_text": "Fick's First Law of Diffusion",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-17-b",
          "option_text": "Fourier's Law of Thermal Conduction",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-17-c",
          "option_text": "Newton's Law of Fluid Viscosity",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-17-d",
          "option_text": "Ohm's Law of Charge Transport",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-18",
      "question_text": "In shell-and-tube heat exchanger design, what components are installed inside the shell to support tube bundles and force cross-flow turbulence to increase shell-side heat transfer coefficients?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-18-a",
          "option_text": "Segmental Baffles",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-18-b",
          "option_text": "Tie Rods and Spacers",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-18-c",
          "option_text": "Impingement Plates",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-18-d",
          "option_text": "Floating Head Covers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-19",
      "question_text": "What is the primary thermodynamic effect observed when an ideal gas undergoes a throttling process through a porous plug or partially open adiabatic valve (isenthalpic expansion)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-19-a",
          "option_text": "The temperature remains completely unchanged because the Joule-Thomson coefficient of an ideal gas is identically zero",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-19-b",
          "option_text": "The temperature always drops dramatically due to PV expansion work",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-19-c",
          "option_text": "The gas condenses completely into saturated liquid",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-19-d",
          "option_text": "The temperature increases directly proportional to pressure drop",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-20",
      "question_text": "In chemical reaction kinetics, what equation models the exponential temperature dependency of reaction rate constants k = A · exp(-Ea / RT)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-20-a",
          "option_text": "Arrhenius Equation",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-20-b",
          "option_text": "Michaelis-Menten Equation",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-20-c",
          "option_text": "Van 't Hoff Isochore",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-20-d",
          "option_text": "Eyring Transition State Equation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-21",
      "question_text": "In multi-component chemical process flowsheeting, what is the purpose of introducing a purge stream from a recycle loop?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-21-a",
          "option_text": "To prevent the continuous accumulation and build-up of inert or non-reacting impurities in the recycle loop",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-21-b",
          "option_text": "To boost the total per-pass conversion of the primary reactants",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-21-c",
          "option_text": "To cool down the reactor effluent without requiring an external heat exchanger",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-21-d",
          "option_text": "To maintain turbulent Reynolds numbers inside the recycle compressor",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-22",
      "question_text": "In liquid-liquid extraction processes, what parameter describes the ratio of the solute's weight fraction in the extract phase to its weight fraction in the raffinate phase at equilibrium?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-22-a",
          "option_text": "Distribution Coefficient (Partition Ratio)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-22-b",
          "option_text": "Selectivity Index",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-22-c",
          "option_text": "Relative Volatility",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-22-d",
          "option_text": "Hatta Number",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-23",
      "question_text": "What term describes the minimum suction pressure required at the suction flange of a centrifugal pump to prevent vapor formation and cavitation?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-23-a",
          "option_text": "Net Positive Suction Head Required (NPSHR)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-23-b",
          "option_text": "Total Dynamic Head (TDH)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-23-c",
          "option_text": "Specific Speed Head (SSH)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-23-d",
          "option_text": "Static Suction Lift (SSL)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-24",
      "question_text": "In chemical process instrumentation, which type of control loop measures an incoming disturbance before it enters the process unit and takes corrective control action before an error occurs in the output variable?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-24-a",
          "option_text": "Feedforward Control",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-24-b",
          "option_text": "Feedback Control",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-24-c",
          "option_text": "Cascade Master Loop",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-24-d",
          "option_text": "Split-Range Control",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-25",
      "question_text": "In batch reactor safety engineering, what hazard occurs when an exothermic reaction's rate of heat generation exceeds the cooling jacket's maximum heat removal capacity, causing accelerating temperature and pressure rises?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-25-a",
          "option_text": "Thermal Runaway Reaction",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-25-b",
          "option_text": "Deflagration-to-Detonation Transition",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-25-c",
          "option_text": "Vapor Cloud Explosion (VCE)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-25-d",
          "option_text": "Boiling Liquid Expanding Vapor Explosion (BLEVE)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-26",
      "question_text": "What equation in multi-component flash distillation is solved iteratively for the vapor fraction ψ = V/F given feed composition zi and equilibrium K-values?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-26-a",
          "option_text": "Rachford-Rice Equation",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-26-b",
          "option_text": "Fenske Equation",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-26-c",
          "option_text": "Underwood Equation",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-26-d",
          "option_text": "Gilliland Correlation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-27",
      "question_text": "In mass transfer across gas-liquid interfaces, which theoretical model assumes that the entire mass transfer resistance resides in two stagnant thin fluid films on either side of the interface with equilibrium at the contact surface?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-27-a",
          "option_text": "Whitman Two-Film Theory",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-27-b",
          "option_text": "Higbie Penetration Theory",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-27-c",
          "option_text": "Danckwerts Surface Renewal Theory",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-27-d",
          "option_text": "Boundary Layer Shear Theory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-28",
      "question_text": "In industrial ammonia synthesis via the exothermic reversible Haber-Bosch reaction [N2 + 3H2 ⇌ 2NH3], why is the commercial process operated at an elevated temperature (400–500°C) despite Le Chatelier's principle favoring lower temperatures for equilibrium conversion?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-28-a",
          "option_text": "To achieve an economically acceptable reaction rate over the iron-based catalyst, compensating with high pressure (150–250 bar) to shift equilibrium favorably",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-28-b",
          "option_text": "Because ammonia decomposes spontaneously at temperatures below 300°C",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-28-c",
          "option_text": "To prevent condensation of toxic liquid nitrogen in the converter beds",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-28-d",
          "option_text": "Because nitrogen and hydrogen form an explosive solid hydrate at lower temperatures",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-29",
      "question_text": "In membrane separations such as reverse osmosis, what phenomenon occurs when rejected solute molecules accumulate at the active membrane surface, creating an elevated boundary concentration that opposes forward permeation flux?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-29-a",
          "option_text": "Concentration Polarization",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-29-b",
          "option_text": "Donnan Exclusion",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-29-c",
          "option_text": "Fouling Gel Desorption",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-29-d",
          "option_text": "Electro-osmotic Dewatering",
          "is_correct": false
        }
      ]
    },
    {
      "id": "chemical-engineering-30",
      "question_text": "What dimensionless number characterizes the ratio of buoyant forces to viscous forces in natural (free) convective heat transfer in fluids?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "chemical-engineering-30-a",
          "option_text": "Grashof Number (Gr)",
          "is_correct": true
        },
        {
          "id": "chemical-engineering-30-b",
          "option_text": "Rayleigh Number (Ra)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-30-c",
          "option_text": "Reynolds Number (Re)",
          "is_correct": false
        },
        {
          "id": "chemical-engineering-30-d",
          "option_text": "Froude Number (Fr)",
          "is_correct": false
        }
      ]
    }
  ],
  "environmental-engineering": [
    {
      "id": "environmental-engineering-1",
      "question_text": "In wastewater engineering, what parameter measures the quantity of dissolved oxygen consumed by microorganisms while biologically decomposing organic matter over 5 days at 20°C?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-1-a",
          "option_text": "Biochemical Oxygen Demand (BOD5)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-1-b",
          "option_text": "Chemical Oxygen Demand (COD)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-1-c",
          "option_text": "Total Organic Carbon (TOC)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-1-d",
          "option_text": "Dissolved Oxygen Saturation (DO)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-2",
      "question_text": "What is the primary biological mechanism in secondary activated sludge wastewater treatment?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-2-a",
          "option_text": "Aerobic biological decomposition of dissolved organics by a suspended culture of microorganisms forming settleable flocs",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-2-b",
          "option_text": "Anaerobic methane gas generation in sealed digestor tanks",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-2-c",
          "option_text": "Coagulation and precipitation of colloids using alum salts",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-2-d",
          "option_text": "Disinfection of enteric pathogens via ultraviolet irradiation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-3",
      "question_text": "In air pollution control, which industrial control device uses high-voltage electrostatic charges to remove particulate matter (PM2.5 / PM10) from exhaust gas streams?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-3-a",
          "option_text": "Electrostatic Precipitator (ESP)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-3-b",
          "option_text": "Fabric Filter Baghouse",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-3-c",
          "option_text": "Wet Venturi Scrubber",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-3-d",
          "option_text": "Thermal Catalytic Oxidizer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-4",
      "question_text": "What physical law governs the steady-state volumetric rate of groundwater flow through porous soil media under a hydraulic gradient?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-4-a",
          "option_text": "Darcy's Law",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-4-b",
          "option_text": "Fick's Second Law of Diffusion",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-4-c",
          "option_text": "Stokes' Law of Sedimentation",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-4-d",
          "option_text": "Poiseuille's Capillary Flow Equation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-5",
      "question_text": "In municipal drinking water treatment, which chemical coagulant is most widely dosed in rapid-mix tanks to destabilize negative surface charges on colloidal clay particles?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-5-a",
          "option_text": "Alum [Aluminum Sulfate, Al2(SO4)3·14H2O] or Ferric Chloride",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-5-b",
          "option_text": "Sodium Hydroxide (Caustic Soda)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-5-c",
          "option_text": "Activated Powdered Carbon",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-5-d",
          "option_text": "Calcium Hypochlorite",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-6",
      "question_text": "What engineered barrier system is mandatory at the base of modern sanitary municipal solid waste (MSW) landfills to protect groundwater aquifers?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-6-a",
          "option_text": "Composite Liner (HDPE Geomembrane over low-permeability compacted clay) with Leachate Collection System",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-6-b",
          "option_text": "Single layer of uncompacted sandy gravel",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-6-c",
          "option_text": "Permeable geotextile fabric directly on bedrock",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-6-d",
          "option_text": "Concrete slab with unsealed expansion joints",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-7",
      "question_text": "In water quality analysis, how does Chemical Oxygen Demand (COD) typically compare to Biochemical Oxygen Demand (BOD5) for the same industrial wastewater sample?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-7-a",
          "option_text": "COD is always higher than or equal to BOD5 because it oxidizes chemically both biodegradable and non-biodegradable organics",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-7-b",
          "option_text": "COD is always lower than BOD5 because chemicals cannot oxidize carbohydrates",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-7-c",
          "option_text": "COD and BOD5 are strictly equal in all natural waters",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-7-d",
          "option_text": "COD is zero for any wastewater containing toxic metals",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-8",
      "question_text": "What atmospheric phenomenon traps ground-level air pollutants in valleys during cold, calm nights when a layer of warm air covers cooler air near the ground?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-8-a",
          "option_text": "Thermal Temperature Inversion",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-8-b",
          "option_text": "Atmospheric Adiabatic Lapse Expansion",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-8-c",
          "option_text": "Coriolis Deflection",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-8-d",
          "option_text": "Monsoon Convection",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-9",
      "question_text": "In environmental toxicology, what metric represents the single calculated chemical dose that proves lethal to exactly 50% of an animal test population?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-9-a",
          "option_text": "Lethal Dose 50 (LD50)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-9-b",
          "option_text": "No Observed Adverse Effect Level (NOAEL)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-9-c",
          "option_text": "Reference Dose (RfD)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-9-d",
          "option_text": "Maximum Contaminant Level Goal (MCLG)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-10",
      "question_text": "Which greenhouse gas emitted primarily by agricultural livestock, rice paddies, and anaerobic landfill decay has a 100-year Global Warming Potential ~28-36 times greater than CO2?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-10-a",
          "option_text": "Methane (CH4)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-10-b",
          "option_text": "Nitrous Oxide (N2O)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-10-c",
          "option_text": "Sulfur Hexafluoride (SF6)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-10-d",
          "option_text": "Carbon Monoxide (CO)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-11",
      "question_text": "In environmental legislation, what comprehensive assessment document evaluates potential environmental, ecological, and socioeconomic impacts before executing a major infrastructure project?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-11-a",
          "option_text": "Environmental Impact Assessment (EIA) / Environmental Impact Statement (EIS)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-11-b",
          "option_text": "Toxic Release Inventory (TRI) Report",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-11-c",
          "option_text": "Safety Data Sheet (SDS)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-11-d",
          "option_text": "Pollution Prevention Plan (P2)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-12",
      "question_text": "What biological nutrient removal process converts toxic ammonia (NH3/NH4+) into nitrate (NO3-) in wastewater under aerobic conditions?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-12-a",
          "option_text": "Nitrification (catalyzed by Nitrosomonas and Nitrobacter bacteria)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-12-b",
          "option_text": "Denitrification (heterotrophic anoxic reduction)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-12-c",
          "option_text": "Anammox process",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-12-d",
          "option_text": "Ammonification of organic nitrogen",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-13",
      "question_text": "In drinking water disinfection, what carcinogenic disinfection byproducts (DBPs) are formed when free chlorine reacts with natural organic matter (humic acids)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-13-a",
          "option_text": "Trihalomethanes (THMs) and Haloacetic Acids (HAAs)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-13-b",
          "option_text": "Polychlorinated Biphenyls (PCBs)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-13-c",
          "option_text": "Per- and Polyfluoroalkyl Substances (PFAS)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-13-d",
          "option_text": "Polycyclic Aromatic Hydrocarbons (PAHs)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-14",
      "question_text": "Which soil remediation technology utilizes living green plants to extract, stabilize, or degrade heavy metals and organic contaminants from polluted soils?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-14-a",
          "option_text": "Phytoremediation",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-14-b",
          "option_text": "Soil Vapor Extraction (SVE)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-14-c",
          "option_text": "In-Situ Chemical Oxidation (ISCO)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-14-d",
          "option_text": "Thermal Desorption Pyrolysis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-15",
      "question_text": "What physical law predicts the terminal settling velocity of discrete suspended solid particles in an ideal sedimentation basin?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-15-a",
          "option_text": "Stokes' Law",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-15-b",
          "option_text": "Bernoulli's Principle",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-15-c",
          "option_text": "Henry's Law of Gas Solubility",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-15-d",
          "option_text": "Fanning Friction Equation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-16",
      "question_text": "In hazardous waste management under US RCRA regulations, which of the following is NOT one of the four characteristic hazardous waste criteria?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-16-a",
          "option_text": "Radioactivity (regulated under Atomic Energy Act, not RCRA Characteristic)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-16-b",
          "option_text": "Ignitability",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-16-c",
          "option_text": "Corrosivity",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-16-d",
          "option_text": "Reactivity / Toxicity",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-17",
      "question_text": "What air pollution control device absorbs acidic gases such as Sulfur Dioxide (SO2) from coal-fired power plant flue gas by spraying a calcium limestone slurry?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-17-a",
          "option_text": "Flue Gas Desulfurization (FGD) Wet Scrubber",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-17-b",
          "option_text": "Cyclonic Dust Separator",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-17-c",
          "option_text": "Biofilter Compost Bed",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-17-d",
          "option_text": "Selective Catalytic Reduction (SCR) Chamber",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-18",
      "question_text": "In lake ecology, what condition characterized by excessive nutrient enrichment (phosphorus/nitrogen) triggers harmful algal blooms and benthic oxygen depletion?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-18-a",
          "option_text": "Eutrophication",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-18-b",
          "option_text": "Oligotrophication",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-18-c",
          "option_text": "Acidification",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-18-d",
          "option_text": "Thermal Stratification",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-19",
      "question_text": "What membrane filtration technology operates under high hydrostatic pressure exceeding osmotic pressure to desalt seawater and remove dissolved inorganic ions?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-19-a",
          "option_text": "Reverse Osmosis (RO)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-19-b",
          "option_text": "Ultrafiltration (UF)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-19-c",
          "option_text": "Microfiltration (MF)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-19-d",
          "option_text": "Gravity Sand Filtration",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-20",
      "question_text": "In environmental monitoring, what persistent synthetic 'forever chemicals' with strong carbon-fluorine bonds are widely detected in groundwater due to aqueous firefighting foams?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-20-a",
          "option_text": "PFAS (Per- and Polyfluoroalkyl Substances: PFOA, PFOS)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-20-b",
          "option_text": "Organophosphate Pesticides (Malathion)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-20-c",
          "option_text": "Chlorofluorocarbons (CFC-11)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-20-d",
          "option_text": "Benzene, Toluene, Ethylbenzene, Xylene (BTEX)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-21",
      "question_text": "What secondary biological treatment unit trickles settled wastewater over an open bed of rocks or corrugated plastic media coated with a microbial slime layer?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-21-a",
          "option_text": "Trickling Filter (Biofilter)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-21-b",
          "option_text": "Upflow Anaerobic Sludge Blanket (UASB)",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-21-c",
          "option_text": "Oxidation Ditch",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-21-d",
          "option_text": "Sequencing Batch Reactor (SBR)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-22",
      "question_text": "In air pollution modeling, which mathematical model assumes pollutants disperse downwind in a steady-state cone with normal distribution in vertical and lateral directions?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-22-a",
          "option_text": "Gaussian Plume Model",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-22-b",
          "option_text": "Box Model of Ambient Smog",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-22-c",
          "option_text": "Eulerian Photochemical Grid Model",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-22-d",
          "option_text": "Lagrangian Particle Dispersion Trajectory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-23",
      "question_text": "What is the primary function of a selective catalytic reduction (SCR) system on internal combustion exhaust stacks?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-23-a",
          "option_text": "Reducing Nitrogen Oxides (NOx) to harmless N2 and H2O using ammonia or urea as a reducing agent",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-23-b",
          "option_text": "Converting carbon dioxide into synthetic methanol",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-23-c",
          "option_text": "Filtering coarse fly ash particles larger than 50 microns",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-23-d",
          "option_text": "Oxidizing carbon monoxide into elemental diamond",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-24",
      "question_text": "In solid waste management, what metric represents the ratio of solid waste mass diverted from landfills through recycling and composting to total waste generated?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-24-a",
          "option_text": "Diversion Rate (%)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-24-b",
          "option_text": "Compaction Ratio",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-24-c",
          "option_text": "Generation Rate per Capita",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-24-d",
          "option_text": "Landfill Tipping Fee",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-25",
      "question_text": "What gas is produced in the largest quantity during anaerobic digestion of municipal sewage sludge (approx. 60-65% CH4 and 35-40% CO2)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-25-a",
          "option_text": "Biogas (Methane and Carbon Dioxide)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-25-b",
          "option_text": "Pure Hydrogen Gas",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-25-c",
          "option_text": "Nitrogen Dioxide",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-25-d",
          "option_text": "Hydrogen Cyanide",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-26",
      "question_text": "In hydrology and stormwater engineering, what standard equation estimates peak stormwater runoff discharge Q = C * I * A for small urban drainage basins?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-26-a",
          "option_text": "The Rational Method",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-26-b",
          "option_text": "Manning's Equation for Open Channels",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-26-c",
          "option_text": "Unit Hydrograph Convolution",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-26-d",
          "option_text": "Muskingum River Flood Routing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-27",
      "question_text": "Which international environmental treaty established in 1987 phase out chlorofluorocarbons (CFCs) and halons to protect the stratospheric ozone layer?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-27-a",
          "option_text": "The Montreal Protocol",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-27-b",
          "option_text": "The Kyoto Protocol",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-27-c",
          "option_text": "The Paris Climate Agreement",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-27-d",
          "option_text": "The Basel Convention on Transboundary Wastes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-28",
      "question_text": "In groundwater contaminant transport, what process causes a dissolved contaminant plume to spread longitudinally and transversely faster than average advective pore velocity?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-28-a",
          "option_text": "Hydrodynamic Dispersion (Molecular Diffusion + Mechanical Dispersion)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-28-b",
          "option_text": "Sorption Equilibrium Isotherm",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-28-c",
          "option_text": "Radioactive Half-life Decay",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-28-d",
          "option_text": "Capillary Action Wicking",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-29",
      "question_text": "What is the Sludge Volume Index (SVI) used to assess in an activated sludge wastewater treatment plant?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-29-a",
          "option_text": "Settling characteristics and compactibility of activated sludge in secondary clarifiers (mL/g)",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-29-b",
          "option_text": "Total bacterial count per liter of mixed liquor",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-29-c",
          "option_text": "Rate of biological nitrification kinetics",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-29-d",
          "option_text": "Heavy metal adsorption capacity on cell walls",
          "is_correct": false
        }
      ]
    },
    {
      "id": "environmental-engineering-30",
      "question_text": "In acoustics and environmental noise control, what frequency-weighting network mimics the human ear's sensitivity across conversational frequencies when reporting dBA decibels?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "environmental-engineering-30-a",
          "option_text": "A-Weighting Curve",
          "is_correct": true
        },
        {
          "id": "environmental-engineering-30-b",
          "option_text": "C-Weighting Curve for Explosive Blast",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-30-c",
          "option_text": "Z-Weighting Linear Response",
          "is_correct": false
        },
        {
          "id": "environmental-engineering-30-d",
          "option_text": "Octave Band Center Filter",
          "is_correct": false
        }
      ]
    }
  ],
  "biomedical-engineering": [
    {
      "id": "biomedical-engineering-1",
      "question_text": "In biomedical engineering, what property defines a biomaterial's ability to perform its desired function without inducing adverse local or systemic host responses?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-1-a",
          "option_text": "Biocompatibility",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-1-b",
          "option_text": "Bioactivity",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-1-c",
          "option_text": "Bioerosion Rate",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-1-d",
          "option_text": "Hemolysis Index",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-2",
      "question_text": "Which cardiac diagnostic signal records the electrical depolarization and repolarization waves of the human heart myocardium from skin electrodes?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-2-a",
          "option_text": "Electrocardiogram (ECG / EKG)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-2-b",
          "option_text": "Electromyogram (EMG)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-2-c",
          "option_text": "Electroencephalogram (EEG)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-2-d",
          "option_text": "Electrooculogram (EOG)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-3",
      "question_text": "In clinical Magnetic Resonance Imaging (MRI), what atomic nucleus is most commonly imaged due to its high abundance in human biological tissues?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-3-a",
          "option_text": "Hydrogen-1 (Proton, 1H)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-3-b",
          "option_text": "Carbon-12 (12C)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-3-c",
          "option_text": "Oxygen-16 (16O)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-3-d",
          "option_text": "Sodium-23 (23Na)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-4",
      "question_text": "What phenomenon describes the direct structural and functional connection between living bone tissue and the surface of a load-bearing implant (e.g. titanium dental/orthopedic screws)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-4-a",
          "option_text": "Osseointegration",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-4-b",
          "option_text": "Fibrous Encapsulation",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-4-c",
          "option_text": "Epithelial Invagination",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-4-d",
          "option_text": "Galvanic Corrosion",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-5",
      "question_text": "In bioinstrumentation, what circuit amplifier is standardly used as the front-end to reject high common-mode 50/60 Hz power-line interference while amplifying microvolt biopotentials?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-5-a",
          "option_text": "Instrumentation Amplifier with High Common-Mode Rejection Ratio (CMRR)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-5-b",
          "option_text": "Single-Ended Inverting Op-Amp",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-5-c",
          "option_text": "Current-to-Voltage Transimpedance Buffer",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-5-d",
          "option_text": "Passive Diode Peak Detector",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-6",
      "question_text": "What is the primary physical principle of Ultrasound pulse-echo medical imaging?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-6-a",
          "option_text": "Piezoelectric acoustic wave reflection at acoustic impedance mismatches between adjacent biological tissues",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-6-b",
          "option_text": "X-ray photoelectric absorption in heavy elements",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-6-c",
          "option_text": "Radiofrequency nuclear magnetic precession in superconducting coils",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-6-d",
          "option_text": "Gamma ray scintillation following positron annihilation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-7",
      "question_text": "In hemodialysis therapy for end-stage renal failure, across what artificial membrane structure do metabolic toxins (urea, creatinine) diffuse from blood into dialysate?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-7-a",
          "option_text": "Semipermeable Hollow Fiber Dialyzer Membrane",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-7-b",
          "option_text": "Impermeable Silicone Tubing",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-7-c",
          "option_text": "Expanded Polytetrafluoroethylene (ePTFE) Solid Sheet",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-7-d",
          "option_text": "Hydrophobic Polycarbonate Filter",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-8",
      "question_text": "What mechanical behavior is characteristic of biological soft tissues (tendons, ligaments, articular cartilage) where stress depends on both strain and strain rate?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-8-a",
          "option_text": "Viscoelasticity (Hysteresis, Creep, and Stress Relaxation)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-8-b",
          "option_text": "Linear Hookean Elasticity",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-8-c",
          "option_text": "Ideal Perfect Plasticity",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-8-d",
          "option_text": "Brittle Isotropic Hardening",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-9",
      "question_text": "In tissue engineering, what temporary 3D porous construct provides architectural support and biochemical cues for cell attachment, proliferation, and extracellular matrix deposition?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-9-a",
          "option_text": "Tissue Engineering Scaffold",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-9-b",
          "option_text": "Petri Dish Monolayer",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-9-c",
          "option_text": "Dialysis Cassette",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-9-d",
          "option_text": "Cryogenic Storage Straw",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-10",
      "question_text": "Which FDA medical device regulatory pathway is used for Class II devices demonstrating substantial equivalence to a legally marketed predicate device?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-10-a",
          "option_text": "510(k) Premarket Notification",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-10-b",
          "option_text": "Premarket Approval (PMA)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-10-c",
          "option_text": "Humanitarian Device Exemption (HDE)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-10-d",
          "option_text": "De Novo Classification Request",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-11",
      "question_text": "What electrical waveform on an ECG tracing corresponds to ventricular depolarization immediately prior to mechanical ventricular contraction?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-11-a",
          "option_text": "QRS Complex",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-11-b",
          "option_text": "P Wave",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-11-c",
          "option_text": "T Wave",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-11-d",
          "option_text": "PR Segment",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-12",
      "question_text": "In Computed Tomography (CT) imaging, what normalized unit represents tissue X-ray attenuation relative to distilled water (0 HU) and air (-1000 HU)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-12-a",
          "option_text": "Hounsfield Unit (HU)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-12-b",
          "option_text": "Becquerel (Bq)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-12-c",
          "option_text": "Sievert (Sv)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-12-d",
          "option_text": "Tesla (T)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-13",
      "question_text": "What synthetic biodegradable polymer is standardly used for bioresorbable surgical sutures and orthopedic interference screws?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-13-a",
          "option_text": "Poly(lactic-co-glycolic acid) (PLGA) / Polylactic Acid (PLA)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-13-b",
          "option_text": "Ultra-High-Molecular-Weight Polyethylene (UHMWPE)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-13-c",
          "option_text": "Polytetrafluoroethylene (Teflon)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-13-d",
          "option_text": "Polycarbonate (PC)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-14",
      "question_text": "In clinical neural engineering, which EEG brainwave frequency band (8 - 13 Hz) is prominently recorded over the occipital lobe during relaxed, awake states with eyes closed?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-14-a",
          "option_text": "Alpha Waves",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-14-b",
          "option_text": "Delta Waves (0.5 - 4 Hz)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-14-c",
          "option_text": "Beta Waves (13 - 30 Hz)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-14-d",
          "option_text": "Gamma Waves (>30 Hz)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-15",
      "question_text": "What device monitors continuous arterial oxygen saturation (SpO2) non-invasively by measuring optical absorbance ratios of oxygenated and deoxygenated hemoglobin at 660 nm and 940 nm?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-15-a",
          "option_text": "Pulse Oximeter",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-15-b",
          "option_text": "Capnograph",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-15-c",
          "option_text": "Plethysmograph",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-15-d",
          "option_text": "Spirometer",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-16",
      "question_text": "What mechanism causes foreign body giant cell formation around permanent subcutaneous implants?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-16-a",
          "option_text": "Chronic Foreign Body Reaction triggered by macrophage fusion on non-degradable surfaces",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-16-b",
          "option_text": "Acute Type I IgE anaphylaxis",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-16-c",
          "option_text": "Bacterial biofilm synthesis without leukocyte activation",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-16-d",
          "option_text": "Enzymatic hydrolysis of metallic grain boundaries",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-17",
      "question_text": "In orthopedic biomechanics of total hip replacement, what phenomenon causes bone density loss surrounding a stiff metal femoral stem due to reduction of physiological load?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-17-a",
          "option_text": "Stress Shielding (Wolff's Law adaptation)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-17-b",
          "option_text": "Osteonecrosis of the Femoral Head",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-17-c",
          "option_text": "Aseptic Loosening via Wear Debris",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-17-d",
          "option_text": "Creep Deformation of Titanium",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-18",
      "question_text": "Which international standard specifies safety and essential performance requirements for Medical Electrical Equipment?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-18-a",
          "option_text": "IEC 60601-1",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-18-b",
          "option_text": "ISO 9001",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-18-c",
          "option_text": "ISO 14001",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-18-d",
          "option_text": "IEEE 802.11",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-19",
      "question_text": "In cardiac pacing, what does a Demand Pacemaker (e.g. VVI mode) do when it senses an intrinsic ventricular R-wave from the patient's own heart?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-19-a",
          "option_text": "Inhibits its scheduled pacing pulse to avoid competitive pacing",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-19-b",
          "option_text": "Triggers an instantaneous high-voltage defibrillation shock",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-19-c",
          "option_text": "Switches automatically to maximum rate asynchronous pacing",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-19-d",
          "option_text": "Emits an audible alarm and disconnects the lead",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-20",
      "question_text": "What biosensor element selectively recognizes glucose molecules in personal blood glucose monitoring strips, catalyzing an electrochemical reaction?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-20-a",
          "option_text": "Glucose Oxidase (GOx) / Glucose Dehydrogenase enzyme",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-20-b",
          "option_text": "Monoclonal Antibodies to insulin",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-20-c",
          "option_text": "Synthetic Ion-Selective Liquid Membranes",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-20-d",
          "option_text": "Colloidal Gold Nanoparticles",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-21",
      "question_text": "In MRI physics, what relaxation parameter describes the spin-lattice (longitudinal) magnetization recovery time constant?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-21-a",
          "option_text": "T1 Relaxation Time",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-21-b",
          "option_text": "T2 Spin-Spin Decay Time",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-21-c",
          "option_text": "T2* Magnetic Inhomogeneity Decay",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-21-d",
          "option_text": "Larmor Precession Frequency",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-22",
      "question_text": "Which biopotential electrode is considered the non-polarizable reference standard in clinical electrophysiology recordings due to minimal junction potential drift?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-22-a",
          "option_text": "Silver / Silver Chloride (Ag/AgCl) Electrode",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-22-b",
          "option_text": "Bare Stainless Steel Needle",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-22-c",
          "option_text": "Platinum-Iridium Wire",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-22-d",
          "option_text": "Gold Plated Disc",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-23",
      "question_text": "What is the primary physiological mechanism of an automated external defibrillator (AED) delivering a biphasic electrical shock?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-23-a",
          "option_text": "Simultaneously depolarizing a critical mass of myocardial cells to allow the natural sinoatrial (SA) node to regain pacemaker control",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-23-b",
          "option_text": "Stimulating the vagus nerve to permanently slow heart rate",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-23-c",
          "option_text": "Artificially pumping blood through coronary arteries via muscle spasms",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-23-d",
          "option_text": "Electrolytically recharging depleted intracellular ATP stores",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-24",
      "question_text": "In microfluidics and Lab-on-a-Chip devices, what transparent elastomeric polymer is overwhelmingly cast to form microchannel networks?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-24-a",
          "option_text": "Polydimethylsiloxane (PDMS)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-24-b",
          "option_text": "Polyethylene Terephthalate (PET)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-24-c",
          "option_text": "High-Density Polyethylene (HDPE)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-24-d",
          "option_text": "Polystyrene (PS)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-25",
      "question_text": "What is the function of an intra-aortic balloon pump (IABP) deployed in cardiovascular intensive care?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-25-a",
          "option_text": "Inflates during diastole to enhance coronary perfusion and deflates during systole to reduce left ventricular afterload",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-25-b",
          "option_text": "Permanently replaces the mitral valve leaflets",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-25-c",
          "option_text": "Filters systemic blood clots before reaching the brain",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-25-d",
          "option_text": "Generates high-frequency pacing pulses for the left atrium",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-26",
      "question_text": "In clinical gait analysis, what instrumented floor platform measures vertical, anterior-posterior, and medial-lateral ground reaction forces during walking?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-26-a",
          "option_text": "Piezoelectric / Strain-Gauge Force Plate",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-26-b",
          "option_text": "Goniometer Arm",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-26-c",
          "option_text": "Electromyographic Surface Preamplifier",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-26-d",
          "option_text": "Optical Reflective Marker Tracker",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-27",
      "question_text": "What standard sterilization method uses ionizing radiation to sterilize pre-packaged, heat-sensitive single-use medical devices (syringes, catheters)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-27-a",
          "option_text": "Gamma Irradiation (Cobalt-60) or Electron Beam (E-beam)",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-27-b",
          "option_text": "Autoclaving Steam under Pressure (121°C)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-27-c",
          "option_text": "Ethylene Oxide (EtO) Gas (non-radiation)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-27-d",
          "option_text": "Dry Heat Baking (160°C)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-28",
      "question_text": "In biosignal processing, which digital filtering window is standardly applied to suppress high-frequency muscle tremor noise from an ECG recording?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-28-a",
          "option_text": "Low-Pass Filter with cutoff at ~40 Hz - 100 Hz",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-28-b",
          "option_text": "High-Pass Filter with cutoff at 500 Hz",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-28-c",
          "option_text": "Notch Filter at DC (0 Hz)",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-28-d",
          "option_text": "All-Pass Phase Shifter",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-29",
      "question_text": "What is the primary function of an extracorporeal membrane oxygenator (ECMO)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-29-a",
          "option_text": "Providing external cardiac and respiratory support by adding oxygen to and removing carbon dioxide directly from circulating blood",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-29-b",
          "option_text": "Dialyzing urea from renal tubules in acute kidney injury",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-29-c",
          "option_text": "Cooling core body temperature during therapeutic hypothermia",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-29-d",
          "option_text": "Filtering circulating tumor cells from peripheral blood",
          "is_correct": false
        }
      ]
    },
    {
      "id": "biomedical-engineering-30",
      "question_text": "Which international quality management standard is specific to medical device manufacturing and regulatory compliance?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "biomedical-engineering-30-a",
          "option_text": "ISO 13485",
          "is_correct": true
        },
        {
          "id": "biomedical-engineering-30-b",
          "option_text": "ISO 9001",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-30-c",
          "option_text": "ISO 27001",
          "is_correct": false
        },
        {
          "id": "biomedical-engineering-30-d",
          "option_text": "Good Laboratory Practice (GLP) only",
          "is_correct": false
        }
      ]
    }
  ],
  "aerospace-engineering": [
    {
      "id": "aerospace-engineering-1",
      "question_text": "In fluid dynamics and aerodynamics, which fundamental theorem explains the generation of aerodynamic lift on an airfoil?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-1-a",
          "option_text": "Kutta-Joukowski Theorem relating lift per unit span to circulation and free-stream density",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-1-b",
          "option_text": "Navier-Stokes Turbulence Closure Hypothesis",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-1-c",
          "option_text": "Torricelli's Law of Efflux",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-1-d",
          "option_text": "Pascal's Hydrostatic Law",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-2",
      "question_text": "What happens to the drag divergence Mach number of a swept wing compared to an unswept rectangular wing of equal thickness?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-2-a",
          "option_text": "It increases because the effective chordwise Mach number component is reduced by the cosine of sweep angle",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-2-b",
          "option_text": "It decreases because tip vortices trigger premature boundary layer separation",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-2-c",
          "option_text": "It remains completely unchanged since free-stream velocity is constant",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-2-d",
          "option_text": "It drops to zero due to transonic shockwave stagnation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-3",
      "question_text": "Which dimensionless parameter defines the ratio of flow velocity to local speed of sound in compressible aerodynamics?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-3-a",
          "option_text": "Mach Number (M)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-3-b",
          "option_text": "Reynolds Number (Re)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-3-c",
          "option_text": "Prandtl Number (Pr)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-3-d",
          "option_text": "Knudsen Number (Kn)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-4",
      "question_text": "What is the primary metric of rocket engine propulsive efficiency measuring thrust delivered per unit weight flow rate of propellant consumed?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-4-a",
          "option_text": "Specific Impulse (Isp, in seconds)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-4-b",
          "option_text": "Thrust-to-Weight Ratio (T/W)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-4-c",
          "option_text": "Characteristic Exhaust Velocity (c*)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-4-d",
          "option_text": "Expansion Area Ratio (Ae/At)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-5",
      "question_text": "In orbital mechanics, which planar orbital maneuver transfers a spacecraft between two coplanar circular orbits with minimum delta-v?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-5-a",
          "option_text": "Hohmann Transfer Orbit",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-5-b",
          "option_text": "Bi-elliptic Transfer Orbit",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-5-c",
          "option_text": "Geostationary Direct Injection",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-5-d",
          "option_text": "Hyperbolic Escape Trajectory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-6",
      "question_text": "What thermodynamic cycle forms the operating benchmark for gas turbine aircraft turbojet and turbofan engines?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-6-a",
          "option_text": "Brayton Cycle (Joule Cycle)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-6-b",
          "option_text": "Rankine Cycle",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-6-c",
          "option_text": "Otto Cycle",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-6-d",
          "option_text": "Diesel Cycle",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-7",
      "question_text": "What aeroelastic instability is characterized by self-excited divergent oscillations of an aircraft wing or empennage in high-speed flight?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-7-a",
          "option_text": "Flutter",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-7-b",
          "option_text": "Buffeting",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-7-c",
          "option_text": "Control Reversal",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-7-d",
          "option_text": "Aileron Buzz",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-8",
      "question_text": "Across an oblique shock wave in supersonic flow, what happens to the static pressure, static temperature, and Mach number?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-8-a",
          "option_text": "Pressure and temperature increase, while Mach number decreases",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-8-b",
          "option_text": "Pressure decreases, temperature increases, and Mach number increases",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-8-c",
          "option_text": "Pressure, temperature, and Mach number all increase simultaneously",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-8-d",
          "option_text": "Pressure and temperature remain constant while Mach number doubles",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-9",
      "question_text": "Which flight control surface provides primary control around the aircraft's longitudinal (roll) axis?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-9-a",
          "option_text": "Ailerons",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-9-b",
          "option_text": "Elevators",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-9-c",
          "option_text": "Rudder",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-9-d",
          "option_text": "Flaps",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-10",
      "question_text": "In rocket propulsion, what geometric shape is used in supersonic de Laval nozzles to accelerate hot combustion gases from subsonic to supersonic velocity?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-10-a",
          "option_text": "Converging-Diverging Nozzle",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-10-b",
          "option_text": "Constant Area Cylindrical Duct",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-10-c",
          "option_text": "Purely Diverging Conical Cone",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-10-d",
          "option_text": "Converging Venturi Orifice",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-11",
      "question_text": "What aerodynamic phenomenon causes induced drag on finite wings due to high-pressure air curling from beneath the wing to the upper surface?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-11-a",
          "option_text": "Wingtip Vortices",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-11-b",
          "option_text": "Skin Friction Boundary Turbulence",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-11-c",
          "option_text": "Form Drag Wake Separation",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-11-d",
          "option_text": "Wave Drag Shock Formation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-12",
      "question_text": "According to Kepler's First Law of Planetary Motion, what is the geometric shape of satellite orbits around a central celestial body?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-12-a",
          "option_text": "Ellipse with the central body located at one of the two foci",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-12-b",
          "option_text": "Perfect Circle with the central body at exact geometric center",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-12-c",
          "option_text": "Parabola with constant orbital eccentricity equal to 1",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-12-d",
          "option_text": "Hyperbola with infinite semi-major axis",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-13",
      "question_text": "In high-bypass turbofan engines, what parameter represents the ratio of mass flow through the fan duct to mass flow through the engine core?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-13-a",
          "option_text": "Bypass Ratio (BPR)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-13-b",
          "option_text": "Pressure Ratio across Compressor (OPR)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-13-c",
          "option_text": "Turbine Inlet Temperature Ratio",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-13-d",
          "option_text": "Thrust Specific Fuel Consumption (TSFC)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-14",
      "question_text": "What primary structural advantage do carbon-fiber reinforced polymer (CFRP) composites offer in modern commercial airliner airframes (e.g. B787, A350)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-14-a",
          "option_text": "Exceptional strength-to-weight ratio, fatigue resistance, and elimination of galvanic metal corrosion",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-14-b",
          "option_text": "Zero manufacturing cost and instantaneous automated cold-stamping",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-14-c",
          "option_text": "Ability to withstand sustained reentry temperatures over 3000°C without ablative tiles",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-14-d",
          "option_text": "Infinitely flexible elasticity with zero structural stiffness",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-15",
      "question_text": "What speed defines the threshold below which an aircraft cannot generate sufficient aerodynamic lift to maintain level flight at a given weight?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-15-a",
          "option_text": "Stall Speed (Vs)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-15-b",
          "option_text": "Never-Exceed Speed (Vne)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-15-c",
          "option_text": "Maneuvering Speed (Va)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-15-d",
          "option_text": "Maximum Structural Cruising Speed (Vno)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-16",
      "question_text": "In supersonic flight, what is the angle mu of the Mach cone created by a point disturbance moving at Mach M > 1?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-16-a",
          "option_text": "sin(mu) = 1 / M",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-16-b",
          "option_text": "cos(mu) = M",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-16-c",
          "option_text": "tan(mu) = 1 / M^2",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-16-d",
          "option_text": "mu = 180° / M",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-17",
      "question_text": "What spacecraft attitude control actuator exchanges angular momentum with the spacecraft without expending rocket reaction propellant?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-17-a",
          "option_text": "Control Moment Gyroscope (CMG) / Reaction Wheel",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-17-b",
          "option_text": "Cold Gas Thruster Quads",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-17-c",
          "option_text": "Solid Rocket Apogee Kick Motor",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-17-d",
          "option_text": "Aerodynamic Trim Tab",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-18",
      "question_text": "In aircraft stability and control, what condition is required for longitudinal static stability?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-18-a",
          "option_text": "The pitch moment curve slope dCm/dalpha must be negative (dCm/dalpha < 0)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-18-b",
          "option_text": "The center of gravity must be located behind the aerodynamic center",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-18-c",
          "option_text": "The trim lift coefficient must equal zero at all flight attitudes",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-18-d",
          "option_text": "The roll damping derivative must be strictly positive",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-19",
      "question_text": "What thermal protection material is utilized on the Space Shuttle / Starship windward tiles to reradiate intense hypersonic reentry heat?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-19-a",
          "option_text": "Reinforced Carbon-Carbon (RCC) and High-Temperature Reusable Surface Insulation (HRSI) Silica Tiles",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-19-b",
          "option_text": "Bare structural 7075-T6 aluminum skin",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-19-c",
          "option_text": "Fiberglass insulation batts wrapped in polyethylene",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-19-d",
          "option_text": "Lead-lined copper sheets",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-20",
      "question_text": "Which gas law equation is standardly integrated in the Rocket Equation derived by Konstantin Tsiolkovsky?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-20-a",
          "option_text": "Delta-v = Isp * g0 * ln(m0 / mf)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-20-b",
          "option_text": "F = m * a",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-20-c",
          "option_text": "P * V = n * R * T",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-20-d",
          "option_text": "E = m * c^2",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-21",
      "question_text": "What condition occurs at the throat of a supersonic rocket nozzle when the local Mach number reaches exactly 1.0?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-21-a",
          "option_text": "Choked Flow (Mass flow rate reaches theoretical maximum)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-21-b",
          "option_text": "Shockwave boundary layer detachment",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-21-c",
          "option_text": "Static pressure drops to zero gauge",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-21-d",
          "option_text": "Combustion gas temperature drops to absolute zero",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-22",
      "question_text": "In aircraft instruments, what sensor measures total pressure (static plus dynamic pitot pressure) to determine indicated airspeed?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-22-a",
          "option_text": "Pitot-Static Tube Probe",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-22-b",
          "option_text": "Barometric Altimeter Diaphragm",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-22-c",
          "option_text": "Ring Laser Gyroscope",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-22-d",
          "option_text": "Angle of Attack Vane",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-23",
      "question_text": "What aerodynamic effect increases wing lift and reduces induced drag when an aircraft flies within one wingspan height of the ground or water surface?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-23-a",
          "option_text": "Ground Effect",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-23-b",
          "option_text": "Coanda Effect",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-23-c",
          "option_text": "Magnus Effect",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-23-d",
          "option_text": "Downwash Deflection Wave",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-24",
      "question_text": "In structural aircraft design, which component absorbs heavy axial loads in the wing bending moment alongside spar caps?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-24-a",
          "option_text": "Wing Skin (Stressed-Skin Monocoque construction)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-24-b",
          "option_text": "Interior Passenger Floor Carpeting",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-24-c",
          "option_text": "Trailing-Edge Flap Fairing",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-24-d",
          "option_text": "Pitot Tube Mounting Bracket",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-25",
      "question_text": "What orbit has an orbital period of exactly 23 hours, 56 minutes, and 4 seconds, matching Earth's sidereal rotation at ~35,786 km altitude?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-25-a",
          "option_text": "Geostationary / Geosynchronous Orbit (GEO)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-25-b",
          "option_text": "Low Earth Orbit (LEO)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-25-c",
          "option_text": "Molniya Highly Elliptical Orbit",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-25-d",
          "option_text": "Sun-Synchronous Polar Orbit (SSO)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-26",
      "question_text": "In aircraft engine compressors, what dangerous flow instability causes complete breakdown of forward airflow and violent backflow through the engine inlet?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-26-a",
          "option_text": "Compressor Surge (Stall)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-26-b",
          "option_text": "Afterburner Light-off Failure",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-26-c",
          "option_text": "Turbine Choking",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-26-d",
          "option_text": "Cavitation in Fuel Injection Pumps",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-27",
      "question_text": "Which aerodynamic device mounted on wingtips reduces vortex strength and improves fuel efficiency by 3-5%?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-27-a",
          "option_text": "Winglets (Sharklets)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-27-b",
          "option_text": "Vortex Generators",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-27-c",
          "option_text": "Leading Edge Slats",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-27-d",
          "option_text": "Spoilers / Speed Brakes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-28",
      "question_text": "What is the escape velocity required from Earth's surface to completely break free from Earth's gravitational field (neglecting atmospheric drag)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-28-a",
          "option_text": "~11.2 km/s (approx. 40,320 km/h)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-28-b",
          "option_text": "~7.8 km/s (orbital velocity)",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-28-c",
          "option_text": "~3.1 km/s",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-28-d",
          "option_text": "~25.4 km/s",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-29",
      "question_text": "In helicopter aerodynamics, what mechanism tilts the main rotor tip-path plane to achieve directional translational flight?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-29-a",
          "option_text": "Swashplate Assembly (Cyclic pitch control)",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-29-b",
          "option_text": "Tail Rotor Collective Yaw Governor",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-29-c",
          "option_text": "Freewheeling Clutch",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-29-d",
          "option_text": "Mast Bending Gimbal",
          "is_correct": false
        }
      ]
    },
    {
      "id": "aerospace-engineering-30",
      "question_text": "What is the purpose of an aircraft Auxiliary Power Unit (APU) located in the tail cone?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "aerospace-engineering-30-a",
          "option_text": "Providing electrical power and pneumatic compressed air to start main engines on the ground",
          "is_correct": true
        },
        {
          "id": "aerospace-engineering-30-b",
          "option_text": "Providing supplemental cruise thrust during transatlantic flight",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-30-c",
          "option_text": "Deploying the emergency landing gear via hydraulic ram",
          "is_correct": false
        },
        {
          "id": "aerospace-engineering-30-d",
          "option_text": "Pumping fuel between left and right wing tanks",
          "is_correct": false
        }
      ]
    }
  ],
  "architectural-engineering": [
    {
      "id": "architectural-engineering-1",
      "question_text": "In Architectural Engineering, what does Level of Development (LOD 300) signify in Building Information Modeling (BIM)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-1-a",
          "option_text": "Model elements are graphically defined with specific quantity, size, shape, location, and orientation",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-1-b",
          "option_text": "Conceptual massing showing only approximate spatial volume",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-1-c",
          "option_text": "As-built facility management model with operating manuals and warranty links",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-1-d",
          "option_text": "Fabrication-level assembly model with shop weld details (LOD 400)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-2",
      "question_text": "Which structural framing system uses rigid column-to-beam connections to resist lateral wind and seismic forces without diagonal braces?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-2-a",
          "option_text": "Moment-Resisting Frame (MRF)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-2-b",
          "option_text": "Braced Frame System",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-2-c",
          "option_text": "Bearing Wall System",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-2-d",
          "option_text": "Shear Wall Core System",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-3",
      "question_text": "What is the primary physical function of a building envelope's continuous air barrier system?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-3-a",
          "option_text": "Preventing uncontrolled air leakage and convective moisture transport through exterior assemblies",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-3-b",
          "option_text": "Supporting the primary structural roof dead loads",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-3-c",
          "option_text": "Reflecting solar infrared radiation to reduce ambient air temperature",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-3-d",
          "option_text": "Providing sound amplification inside building atriums",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-4",
      "question_text": "What parameter measures the overall rate of heat transfer through a composite building envelope assembly?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-4-a",
          "option_text": "U-factor (Thermal Transmittance, W/m²·K)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-4-b",
          "option_text": "Sound Transmission Class (STC)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-4-c",
          "option_text": "Coefficient of Thermal Expansion",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-4-d",
          "option_text": "Solar Heat Gain Coefficient (SHGC)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-5",
      "question_text": "In architectural acoustics, what does the Sabine equation calculate for an enclosed space?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-5-a",
          "option_text": "Reverberation Time (RT60)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-5-b",
          "option_text": "Sound Transmission Class across partitions",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-5-c",
          "option_text": "Impact Isolation Class of floor slabs",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-5-d",
          "option_text": "Noise Reduction Coefficient of ceiling baffles",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-6",
      "question_text": "Which HVAC distribution system delivers variable air volumes at constant temperature to individual building thermal zones?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-6-a",
          "option_text": "Variable Air Volume (VAV) System",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-6-b",
          "option_text": "Constant Air Volume (CAV) System",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-6-c",
          "option_text": "Single-Duct Terminal Reheat System",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-6-d",
          "option_text": "Direct Expansion (DX) Window Unit",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-7",
      "question_text": "In life safety design, what standard NFPA / IBC calculation determines the minimum required width of egress doors and stairs?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-7-a",
          "option_text": "Occupant Load multiplied by the capacity egress factor (e.g. 0.3 in/person for stairs)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-7-b",
          "option_text": "Floor area divided by the building height",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-7-c",
          "option_text": "Total structural column spacing along corridor walls",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-7-d",
          "option_text": "Maximum window glazing area of adjacent facades",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-8",
      "question_text": "What structural mechanism counteracts thermal expansion and seismic drift between adjacent independent building wings?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-8-a",
          "option_text": "Seismic and Expansion Joints with elastomeric covers",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-8-b",
          "option_text": "Continuous welded steel tension plates",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-8-c",
          "option_text": "Rigid monolithic epoxy grouting",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-8-d",
          "option_text": "Prestressed tendon post-tensioning anchors",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-9",
      "question_text": "In daylighting engineering, what metric defines the ratio of indoor illuminance on a working plane to outdoor unobstructed overcast sky illuminance?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-9-a",
          "option_text": "Daylight Factor (DF)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-9-b",
          "option_text": "Daylight Glare Probability (DGP)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-9-c",
          "option_text": "Color Rendering Index (CRI)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-9-d",
          "option_text": "Luminous Efficacy of Light Source",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-10",
      "question_text": "What foundation type is engineered as a continuous, thick reinforced concrete slab supporting an entire building on soft, compressible soils?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-10-a",
          "option_text": "Mat / Raft Foundation",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-10-b",
          "option_text": "Isolated Spread Footing",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-10-c",
          "option_text": "Strip Wall Footing",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-10-d",
          "option_text": "Driven Precast Concrete Friction Piles",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-11",
      "question_text": "In sustainable architecture, what credit category in LEED v4 evaluates lifecycle impact reduction, recycling, and transparency?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-11-a",
          "option_text": "Materials and Resources (MR)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-11-b",
          "option_text": "Energy and Atmosphere (EA)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-11-c",
          "option_text": "Indoor Environmental Quality (EQ)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-11-d",
          "option_text": "Water Efficiency (WE)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-12",
      "question_text": "What physical phenomenon occurs when a highly conductive building element penetrates insulation, causing localized heat loss and condensation?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-12-a",
          "option_text": "Thermal Bridging",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-12-b",
          "option_text": "Thermal Mass Buffering",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-12-c",
          "option_text": "Stack Effect Ventilation",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-12-d",
          "option_text": "Convective Chimney Effect",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-13",
      "question_text": "In building electrical systems, which transformer connection configuration is standardly used for 3-phase commercial distribution providing 480Y/277V or 208Y/120V?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-13-a",
          "option_text": "Delta-Wye (Δ-Y) with grounded neutral",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-13-b",
          "option_text": "Delta-Delta (Δ-Δ) floating ungrounded",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-13-c",
          "option_text": "Open-Delta (V-V) single phase",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-13-d",
          "option_text": "Wye-Wye (Y-Y) without neutral ground",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-14",
      "question_text": "Which type of concrete prestressing tensions high-strength steel strands AFTER the surrounding cast-in-place concrete has cured?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-14-a",
          "option_text": "Post-Tensioning",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-14-b",
          "option_text": "Pre-Tensioning",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-14-c",
          "option_text": "Pre-Cambering",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-14-d",
          "option_text": "Passive Steel Rebar Placement",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-15",
      "question_text": "What is the natural vertical air movement in high-rise buildings driven by indoor-to-outdoor air density and temperature differentials?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-15-a",
          "option_text": "Stack Effect (Chimney Effect)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-15-b",
          "option_text": "Venturi Wind Tunnel Effect",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-15-c",
          "option_text": "Bernoulli Pressure Lift",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-15-d",
          "option_text": "Coriolis Displacement",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-16",
      "question_text": "In structural steel design, what ASTM specification designates the standard high-strength structural steel wide-flange beams (50 ksi yield)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-16-a",
          "option_text": "ASTM A992",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-16-b",
          "option_text": "ASTM A36",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-16-c",
          "option_text": "ASTM A500 Grade B",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-16-d",
          "option_text": "ASTM A53",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-17",
      "question_text": "Which acoustic rating measures a building partition's ability to attenuate airborne sound transmission across speech frequencies?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-17-a",
          "option_text": "Sound Transmission Class (STC)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-17-b",
          "option_text": "Noise Reduction Coefficient (NRC)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-17-c",
          "option_text": "Impact Insulation Class (IIC)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-17-d",
          "option_text": "Ceiling Attenuation Class (CAC)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-18",
      "question_text": "What psychrometric property represents the temperature at which ambient air reaches 100% relative humidity and moisture begins to condense?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-18-a",
          "option_text": "Dew Point Temperature",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-18-b",
          "option_text": "Dry-Bulb Temperature",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-18-c",
          "option_text": "Wet-Bulb Depression",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-18-d",
          "option_text": "Specific Enthalpy",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-19",
      "question_text": "In facade engineering, what pressure-equalization design principle prevents rain penetration through exterior curtain wall cladding?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-19-a",
          "option_text": "Rainscreen Principle (Drained and Back-Ventilated)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-19-b",
          "option_text": "Face-Sealed Barrier Glazing",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-19-c",
          "option_text": "Non-Porous Exterior Vinyl Wrap",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-19-d",
          "option_text": "Direct Surface Silicone Gasketing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-20",
      "question_text": "Which fire suppression system maintains water under pressure in distribution pipes at all times for immediate discharge when a sprinkler head fuses?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-20-a",
          "option_text": "Wet Pipe Sprinkler System",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-20-b",
          "option_text": "Dry Pipe Sprinkler System",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-20-c",
          "option_text": "Deluge Fire System",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-20-d",
          "option_text": "Pre-Action Interlock System",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-21",
      "question_text": "In architectural lighting design, what unit measures the total luminous flux emitted by a light source in all directions?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-21-a",
          "option_text": "Lumen (lm)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-21-b",
          "option_text": "Lux (lx)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-21-c",
          "option_text": "Candela (cd)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-21-d",
          "option_text": "Foot-candle (fc)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-22",
      "question_text": "What building code designation indicates structural walls, columns, and floors engineered to resist fire collapse for a certified duration (e.g. 2 hours)?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-22-a",
          "option_text": "Fire-Resistance Rating (FRR)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-22-b",
          "option_text": "Flame-Spread Index (FSI)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-22-c",
          "option_text": "Smoke-Developed Index (SDI)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-22-d",
          "option_text": "Combustibility Class A",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-23",
      "question_text": "In structural concrete engineering, what is the critical design check to prevent a column from punching directly through a flat slab foundation or floor?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-23-a",
          "option_text": "Two-Way (Punching) Shear Stress around the column perimeter",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-23-b",
          "option_text": "One-Way Beam Shear at d distance from support",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-23-c",
          "option_text": "Flexural Reinforcement Yielding",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-23-d",
          "option_text": "Direct Compression Crushing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-24",
      "question_text": "Which indoor environmental metric measures air freshness by tracking metabolic respiration byproducts in occupied classrooms and offices?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-24-a",
          "option_text": "Carbon Dioxide (CO2) concentration in ppm",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-24-b",
          "option_text": "Relative Humidity percentage",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-24-c",
          "option_text": "Ozone (O3) particle count",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-24-d",
          "option_text": "Volatile Organic Compounds (VOC) in ppb",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-25",
      "question_text": "What is the primary function of a vapor retarder (Class I or II) installed on the warm-in-winter side of an insulated exterior wall?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-25-a",
          "option_text": "Preventing water vapor diffusion from condensing on cold interstitial surfaces within the wall cavity",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-25-b",
          "option_text": "Acting as the primary exterior weather barrier against driving rain",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-25-c",
          "option_text": "Reflecting solar ultraviolet degradation",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-25-d",
          "option_text": "Increasing the acoustic dampening of gypsum wallboard",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-26",
      "question_text": "In building plumbing design, what vent pipe prevents siphonage of water seals in fixture drainage traps?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-26-a",
          "option_text": "Plumbing Vent Stack (Soil Stack Vent)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-26-b",
          "option_text": "Cleanout Relief Drain",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-26-c",
          "option_text": "Stormwater Downspout",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-26-d",
          "option_text": "Grease Interceptor By-pass",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-27",
      "question_text": "What structural damper system uses a suspended heavy mass tuned to the building's natural frequency to mitigate wind-induced swaying in supertall skyscrapers?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-27-a",
          "option_text": "Tuned Mass Damper (TMD)",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-27-b",
          "option_text": "Buckling-Restrained Braced Frame (BRBF)",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-27-c",
          "option_text": "Base Isolation Elastomeric Bearing",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-27-d",
          "option_text": "Viscous Fluid Wall Damper",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-28",
      "question_text": "In construction documentation, which drawing set coordinates MEP systems with architectural and structural layouts to eliminate spatial clashes?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-28-a",
          "option_text": "MEP Coordination / Clash Detection Composite Drawings",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-28-b",
          "option_text": "Architectural Schematic Concept Renderings",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-28-c",
          "option_text": "Outline Specification Brief",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-28-d",
          "option_text": "Zoning Variance Site Surveys",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-29",
      "question_text": "What building energy standard established by ASHRAE defines baseline minimum energy efficiency for commercial building envelopes and mechanical systems?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-29-a",
          "option_text": "ASHRAE Standard 90.1",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-29-b",
          "option_text": "ASHRAE Standard 62.1",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-29-c",
          "option_text": "ASHRAE Standard 55",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-29-d",
          "option_text": "ASHRAE Standard 189.1",
          "is_correct": false
        }
      ]
    },
    {
      "id": "architectural-engineering-30",
      "question_text": "In structural design of masonry buildings, what reinforced concrete or bond-beam element ties perimeter walls together at floor and roof levels?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "architectural-engineering-30-a",
          "option_text": "Tie Beam / Bond Beam / Ring Beam",
          "is_correct": true
        },
        {
          "id": "architectural-engineering-30-b",
          "option_text": "Lintel over window openings",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-30-c",
          "option_text": "Mortar Bed Joint",
          "is_correct": false
        },
        {
          "id": "architectural-engineering-30-d",
          "option_text": "Corbel Shelf Angle",
          "is_correct": false
        }
      ]
    }
  ],
  "computer-science": [
    {
      "id": "computer-science-1",
      "question_text": "In Operating Systems, which condition is NOT one of Coffman's four necessary conditions for deadlock?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-1-a",
          "option_text": "Preemption allowed",
          "is_correct": true
        },
        {
          "id": "computer-science-1-b",
          "option_text": "Mutual exclusion",
          "is_correct": false
        },
        {
          "id": "computer-science-1-c",
          "option_text": "Hold and wait",
          "is_correct": false
        },
        {
          "id": "computer-science-1-d",
          "option_text": "Circular wait",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-2",
      "question_text": "What is the average time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-2-a",
          "option_text": "O(log n)",
          "is_correct": true
        },
        {
          "id": "computer-science-2-b",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "computer-science-2-c",
          "option_text": "O(1)",
          "is_correct": false
        },
        {
          "id": "computer-science-2-d",
          "option_text": "O(n log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-3",
      "question_text": "Which transport layer protocol provides reliable, connection-oriented, and byte-stream delivery with flow and congestion control?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-3-a",
          "option_text": "Transmission Control Protocol (TCP)",
          "is_correct": true
        },
        {
          "id": "computer-science-3-b",
          "option_text": "User Datagram Protocol (UDP)",
          "is_correct": false
        },
        {
          "id": "computer-science-3-c",
          "option_text": "Internet Protocol (IP)",
          "is_correct": false
        },
        {
          "id": "computer-science-3-d",
          "option_text": "Internet Control Message Protocol (ICMP)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-4",
      "question_text": "In Relational Database Management Systems, what does the 'I' in ACID transaction guarantees represent?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-4-a",
          "option_text": "Isolation",
          "is_correct": true
        },
        {
          "id": "computer-science-4-b",
          "option_text": "Integrity",
          "is_correct": false
        },
        {
          "id": "computer-science-4-c",
          "option_text": "Indexing",
          "is_correct": false
        },
        {
          "id": "computer-science-4-d",
          "option_text": "Idempotence",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-5",
      "question_text": "What is the primary role of the Translation Lookaside Buffer (TLB) in a modern CPU memory management unit?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-5-a",
          "option_text": "Caching virtual-to-physical address page translations",
          "is_correct": true
        },
        {
          "id": "computer-science-5-b",
          "option_text": "Buffering dirty cache lines before writeback to main memory",
          "is_correct": false
        },
        {
          "id": "computer-science-5-c",
          "option_text": "Predicting conditional branch outcomes in the pipeline",
          "is_correct": false
        },
        {
          "id": "computer-science-5-d",
          "option_text": "Storing pre-decoded micro-operations",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-6",
      "question_text": "Which data structure is fundamentally used to implement Breadth-First Search (BFS) graph traversal?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-6-a",
          "option_text": "Queue (FIFO)",
          "is_correct": true
        },
        {
          "id": "computer-science-6-b",
          "option_text": "Stack (LIFO)",
          "is_correct": false
        },
        {
          "id": "computer-science-6-c",
          "option_text": "Binary Min-Heap",
          "is_correct": false
        },
        {
          "id": "computer-science-6-d",
          "option_text": "Disjoint Set Union (DSU)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-7",
      "question_text": "In the OSI 7-layer reference model, at which layer do Routers primarily operate?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-7-a",
          "option_text": "Network Layer (Layer 3)",
          "is_correct": true
        },
        {
          "id": "computer-science-7-b",
          "option_text": "Data Link Layer (Layer 2)",
          "is_correct": false
        },
        {
          "id": "computer-science-7-c",
          "option_text": "Transport Layer (Layer 4)",
          "is_correct": false
        },
        {
          "id": "computer-science-7-d",
          "option_text": "Session Layer (Layer 5)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-8",
      "question_text": "What normal form removes partial dependencies of non-prime attributes on a composite candidate key?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-8-a",
          "option_text": "Second Normal Form (2NF)",
          "is_correct": true
        },
        {
          "id": "computer-science-8-b",
          "option_text": "First Normal Form (1NF)",
          "is_correct": false
        },
        {
          "id": "computer-science-8-c",
          "option_text": "Third Normal Form (3NF)",
          "is_correct": false
        },
        {
          "id": "computer-science-8-d",
          "option_text": "Boyce-Codd Normal Form (BCNF)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-9",
      "question_text": "Which page replacement algorithm suffers from Belady's Anomaly where increasing physical frames increases page faults?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-9-a",
          "option_text": "First-In, First-Out (FIFO)",
          "is_correct": true
        },
        {
          "id": "computer-science-9-b",
          "option_text": "Least Recently Used (LRU)",
          "is_correct": false
        },
        {
          "id": "computer-science-9-c",
          "option_text": "Optimal Page Replacement (OPT)",
          "is_correct": false
        },
        {
          "id": "computer-science-9-d",
          "option_text": "Clock / Second-Chance Algorithm",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-10",
      "question_text": "In compiler construction, which phase converts a linear stream of source characters into a stream of tokens?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-10-a",
          "option_text": "Lexical Analysis (Scanner)",
          "is_correct": true
        },
        {
          "id": "computer-science-10-b",
          "option_text": "Syntax Analysis (Parser)",
          "is_correct": false
        },
        {
          "id": "computer-science-10-c",
          "option_text": "Semantic Analysis",
          "is_correct": false
        },
        {
          "id": "computer-science-10-d",
          "option_text": "Intermediate Code Generation",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-11",
      "question_text": "What is the worst-case time complexity of the standard QuickSort algorithm with an unlucky pivot choice?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-11-a",
          "option_text": "O(n^2)",
          "is_correct": true
        },
        {
          "id": "computer-science-11-b",
          "option_text": "O(n log n)",
          "is_correct": false
        },
        {
          "id": "computer-science-11-c",
          "option_text": "O(n)",
          "is_correct": false
        },
        {
          "id": "computer-science-11-d",
          "option_text": "O(log n)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-12",
      "question_text": "In modern multi-core processors, which protocol is standardly used to maintain cache consistency across private L1/L2 caches?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-12-a",
          "option_text": "MESI (Modified, Exclusive, Shared, Invalid)",
          "is_correct": true
        },
        {
          "id": "computer-science-12-b",
          "option_text": "Round-Robin bus arbitration",
          "is_correct": false
        },
        {
          "id": "computer-science-12-c",
          "option_text": "Two-Phase Commit (2PC)",
          "is_correct": false
        },
        {
          "id": "computer-science-12-d",
          "option_text": "Snooping ARP protocol",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-13",
      "question_text": "What synchronization primitive uses atomic Test-and-Set or Compare-and-Swap instructions without causing the CPU to context-switch into a blocked state?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-13-a",
          "option_text": "Spinlock",
          "is_correct": true
        },
        {
          "id": "computer-science-13-b",
          "option_text": "POSIX Semaphore",
          "is_correct": false
        },
        {
          "id": "computer-science-13-c",
          "option_text": "Condition Variable",
          "is_correct": false
        },
        {
          "id": "computer-science-13-d",
          "option_text": "Read-Write Mutex",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-14",
      "question_text": "In Computer Networks, what is the default size of an IPv4 address compared to an IPv6 address?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-14-a",
          "option_text": "32 bits for IPv4, 128 bits for IPv6",
          "is_correct": true
        },
        {
          "id": "computer-science-14-b",
          "option_text": "64 bits for IPv4, 128 bits for IPv6",
          "is_correct": false
        },
        {
          "id": "computer-science-14-c",
          "option_text": "32 bits for IPv4, 64 bits for IPv6",
          "is_correct": false
        },
        {
          "id": "computer-science-14-d",
          "option_text": "16 bits for IPv4, 32 bits for IPv6",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-15",
      "question_text": "Which graph algorithm finds the shortest path between all pairs of vertices in a directed weighted graph?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-15-a",
          "option_text": "Floyd-Warshall Algorithm",
          "is_correct": true
        },
        {
          "id": "computer-science-15-b",
          "option_text": "Dijkstra's Algorithm",
          "is_correct": false
        },
        {
          "id": "computer-science-15-c",
          "option_text": "Kruskal's Algorithm",
          "is_correct": false
        },
        {
          "id": "computer-science-15-d",
          "option_text": "Prim's Algorithm",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-16",
      "question_text": "In Database Systems, why are B+ Trees overwhelmingly preferred over balanced BSTs for disk-based storage indexing?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-16-a",
          "option_text": "High fanout minimizes the number of disk I/O operations required per search",
          "is_correct": true
        },
        {
          "id": "computer-science-16-b",
          "option_text": "B+ Trees require zero memory pointer overhead",
          "is_correct": false
        },
        {
          "id": "computer-science-16-c",
          "option_text": "B+ Trees eliminate the need for write-ahead logging",
          "is_correct": false
        },
        {
          "id": "computer-science-16-d",
          "option_text": "B+ Trees store all records purely in contiguous volatile registers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-17",
      "question_text": "What type of pipeline hazard occurs when an instruction depends on the result of a previous instruction that has not yet completed execution?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-17-a",
          "option_text": "Data Hazard (Read-After-Write)",
          "is_correct": true
        },
        {
          "id": "computer-science-17-b",
          "option_text": "Structural Hazard",
          "is_correct": false
        },
        {
          "id": "computer-science-17-c",
          "option_text": "Control Hazard",
          "is_correct": false
        },
        {
          "id": "computer-science-17-d",
          "option_text": "Branch Misprediction Hazard",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-18",
      "question_text": "In Chomsky's hierarchy of formal grammars, which computational automaton recognizes Context-Free Languages?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-18-a",
          "option_text": "Non-Deterministic Pushdown Automaton (PDA)",
          "is_correct": true
        },
        {
          "id": "computer-science-18-b",
          "option_text": "Deterministic Finite Automaton (DFA)",
          "is_correct": false
        },
        {
          "id": "computer-science-18-c",
          "option_text": "Linear Bounded Automaton",
          "is_correct": false
        },
        {
          "id": "computer-science-18-d",
          "option_text": "Turing Machine with unbounded tape",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-19",
      "question_text": "What algorithm is standardly used for distributed leader election in distributed systems such as Apache ZooKeeper or Raft?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-19-a",
          "option_text": "Consensus algorithms like Raft / Paxos",
          "is_correct": true
        },
        {
          "id": "computer-science-19-b",
          "option_text": "Diffie-Hellman Key Exchange",
          "is_correct": false
        },
        {
          "id": "computer-science-19-c",
          "option_text": "Bellman-Ford Algorithm",
          "is_correct": false
        },
        {
          "id": "computer-science-19-d",
          "option_text": "Aho-Corasick String Matcher",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-20",
      "question_text": "In Cryptography, what is the key characteristic of an asymmetric public-key cryptosystem such as RSA?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-20-a",
          "option_text": "Different keys are used for encryption (public) and decryption (private)",
          "is_correct": true
        },
        {
          "id": "computer-science-20-b",
          "option_text": "The same secret symmetric key is shared over an insecure channel",
          "is_correct": false
        },
        {
          "id": "computer-science-20-c",
          "option_text": "Data can be encrypted but can never be mathematically decrypted",
          "is_correct": false
        },
        {
          "id": "computer-science-20-d",
          "option_text": "The ciphertext is always shorter than the plaintext input",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-21",
      "question_text": "What mechanism prevents priority inversion in real-time operating systems when a low-priority task holds a resource needed by a high-priority task?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-21-a",
          "option_text": "Priority Inheritance Protocol",
          "is_correct": true
        },
        {
          "id": "computer-science-21-b",
          "option_text": "Preemptive Multithreading",
          "is_correct": false
        },
        {
          "id": "computer-science-21-c",
          "option_text": "Round-Robin Quantum Time-Slicing",
          "is_correct": false
        },
        {
          "id": "computer-science-21-d",
          "option_text": "Strict First-Come First-Served",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-22",
      "question_text": "Which collision resolution technique in hash tables stores collided elements in linked lists outside the primary array?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-22-a",
          "option_text": "Separate Chaining",
          "is_correct": true
        },
        {
          "id": "computer-science-22-b",
          "option_text": "Linear Probing",
          "is_correct": false
        },
        {
          "id": "computer-science-22-c",
          "option_text": "Quadratic Probing",
          "is_correct": false
        },
        {
          "id": "computer-science-22-d",
          "option_text": "Double Hashing",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-23",
      "question_text": "In TCP network congestion control, what event causes the sender to reset its congestion window (cwnd) back to 1 MSS?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-23-a",
          "option_text": "Retransmission Timeout (RTO) expiration",
          "is_correct": true
        },
        {
          "id": "computer-science-23-b",
          "option_text": "Receiving three duplicate ACKs (Fast Retransmit)",
          "is_correct": false
        },
        {
          "id": "computer-science-23-c",
          "option_text": "A standard Window Scale negotiation",
          "is_correct": false
        },
        {
          "id": "computer-science-23-d",
          "option_text": "A zero-window probe acknowledgment",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-24",
      "question_text": "What is the primary function of a Linker during the software build process?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-24-a",
          "option_text": "Resolves external symbol references and combines object files into an executable",
          "is_correct": true
        },
        {
          "id": "computer-science-24-b",
          "option_text": "Translates high-level source code into assembly instructions",
          "is_correct": false
        },
        {
          "id": "computer-science-24-c",
          "option_text": "Expands preprocessor macros and header include directives",
          "is_correct": false
        },
        {
          "id": "computer-science-24-d",
          "option_text": "Profiles machine instruction execution bottlenecks",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-25",
      "question_text": "Which algorithmic paradigm does the 0/1 Knapsack problem typically require to find an optimal solution in pseudo-polynomial time?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-25-a",
          "option_text": "Dynamic Programming",
          "is_correct": true
        },
        {
          "id": "computer-science-25-b",
          "option_text": "Greedy Choice Property",
          "is_correct": false
        },
        {
          "id": "computer-science-25-c",
          "option_text": "Divide and Conquer",
          "is_correct": false
        },
        {
          "id": "computer-science-25-d",
          "option_text": "Backtracking with branch pruning",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-26",
      "question_text": "What does the Two-Phase Locking (2PL) protocol guarantee in concurrent database transaction scheduling?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-26-a",
          "option_text": "Conflict Serializability of transaction execution",
          "is_correct": true
        },
        {
          "id": "computer-science-26-b",
          "option_text": "Prevention of all transaction deadlocks",
          "is_correct": false
        },
        {
          "id": "computer-science-26-c",
          "option_text": "Instantaneous durability without write-ahead logging",
          "is_correct": false
        },
        {
          "id": "computer-science-26-d",
          "option_text": "Zero lock acquisition latency",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-27",
      "question_text": "In computer architecture, what technique executes instructions out of program order to maximize arithmetic logic unit utilization?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-27-a",
          "option_text": "Tomasulo's Algorithm with Reservation Stations",
          "is_correct": true
        },
        {
          "id": "computer-science-27-b",
          "option_text": "Static Compiler Inlining",
          "is_correct": false
        },
        {
          "id": "computer-science-27-c",
          "option_text": "Single-Cycle Microarchitecture",
          "is_correct": false
        },
        {
          "id": "computer-science-27-d",
          "option_text": "Strict In-Order Pipelining",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-28",
      "question_text": "Which network security protocol establishes an encrypted tunnel at the Transport Layer between web browsers and servers?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-28-a",
          "option_text": "Transport Layer Security (TLS)",
          "is_correct": true
        },
        {
          "id": "computer-science-28-b",
          "option_text": "Simple Network Management Protocol (SNMP)",
          "is_correct": false
        },
        {
          "id": "computer-science-28-c",
          "option_text": "Address Resolution Protocol (ARP)",
          "is_correct": false
        },
        {
          "id": "computer-science-28-d",
          "option_text": "Border Gateway Protocol (BGP)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-29",
      "question_text": "What is the Halting Problem, first formulated and proven undecidable by Alan Turing in 1936?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-29-a",
          "option_text": "No general algorithm can determine whether an arbitrary program halts on a given input",
          "is_correct": true
        },
        {
          "id": "computer-science-29-b",
          "option_text": "Any program with recursion will inevitably crash with stack overflow",
          "is_correct": false
        },
        {
          "id": "computer-science-29-c",
          "option_text": "Computers cannot execute more than one instruction per clock cycle",
          "is_correct": false
        },
        {
          "id": "computer-science-29-d",
          "option_text": "Every program is guaranteed to terminate if given infinite memory",
          "is_correct": false
        }
      ]
    },
    {
      "id": "computer-science-30",
      "question_text": "In modern database query optimization, what data structure estimates attribute value distribution for cardinality estimation?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "computer-science-30-a",
          "option_text": "Equi-depth or Equi-width Histograms",
          "is_correct": true
        },
        {
          "id": "computer-science-30-b",
          "option_text": "Bloom Filters",
          "is_correct": false
        },
        {
          "id": "computer-science-30-c",
          "option_text": "Skip Lists",
          "is_correct": false
        },
        {
          "id": "computer-science-30-d",
          "option_text": "Radix Trees",
          "is_correct": false
        }
      ]
    }
  ],
  "iot-embedded": [
    {
      "id": "iot-embedded-1",
      "question_text": "What does the acronym \"IoT\" stand for in modern computing?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-1-a",
          "option_text": "Internet of Things",
          "is_correct": true
        },
        {
          "id": "iot-embedded-1-b",
          "option_text": "Interconnected Operating Technology",
          "is_correct": false
        },
        {
          "id": "iot-embedded-1-c",
          "option_text": "Integrated Optical Transmission",
          "is_correct": false
        },
        {
          "id": "iot-embedded-1-d",
          "option_text": "Interface of Telecommunications",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-2",
      "question_text": "Which communication protocol is lightweight, publish-subscribe based, and standard for low-bandwidth IoT devices?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-2-a",
          "option_text": "MQTT (Message Queuing Telemetry Transport)",
          "is_correct": true
        },
        {
          "id": "iot-embedded-2-b",
          "option_text": "HTTP/1.1",
          "is_correct": false
        },
        {
          "id": "iot-embedded-2-c",
          "option_text": "FTP",
          "is_correct": false
        },
        {
          "id": "iot-embedded-2-d",
          "option_text": "SMTP",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-3",
      "question_text": "What is the primary function of a General Purpose Input/Output (GPIO) pin on an MCU?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-3-a",
          "option_text": "Sending or reading digital electrical logic levels to/from connected hardware",
          "is_correct": true
        },
        {
          "id": "iot-embedded-3-b",
          "option_text": "Regulating high-voltage AC mains power directly",
          "is_correct": false
        },
        {
          "id": "iot-embedded-3-c",
          "option_text": "Executing optical computations without electricity",
          "is_correct": false
        },
        {
          "id": "iot-embedded-3-d",
          "option_text": "Storing non-volatile firmware image backups",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-4",
      "question_text": "In an IoT sensor-actuator loop, what is the specific role of an actuator?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-4-a",
          "option_text": "Converting electrical control signals into physical mechanical motion or action",
          "is_correct": true
        },
        {
          "id": "iot-embedded-4-b",
          "option_text": "Measuring ambient environmental temperature and humidity",
          "is_correct": false
        },
        {
          "id": "iot-embedded-4-c",
          "option_text": "Digitizing continuous analog sound waves into binary",
          "is_correct": false
        },
        {
          "id": "iot-embedded-4-d",
          "option_text": "Routing IP packets across distributed WAN routers",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-5",
      "question_text": "Which low-power wireless standard operates at 2.4 GHz and is optimized for battery-powered peripheral connections?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-5-a",
          "option_text": "Bluetooth Low Energy (BLE)",
          "is_correct": true
        },
        {
          "id": "iot-embedded-5-b",
          "option_text": "Gigabit Ethernet",
          "is_correct": false
        },
        {
          "id": "iot-embedded-5-c",
          "option_text": "Wi-Fi 6 (802.11ax 160MHz)",
          "is_correct": false
        },
        {
          "id": "iot-embedded-5-d",
          "option_text": "DOCSIS 3.1",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-6",
      "question_text": "What is the fundamental architectural difference between a Microcontroller (MCU) and a Microprocessor (MPU)?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-6-a",
          "option_text": "An MCU integrates CPU, RAM, and Flash ROM on a single silicon die, whereas an MPU relies on external memory",
          "is_correct": true
        },
        {
          "id": "iot-embedded-6-b",
          "option_text": "An MCU cannot execute C code while an MPU can",
          "is_correct": false
        },
        {
          "id": "iot-embedded-6-c",
          "option_text": "An MPU operates strictly at microwatt power while an MCU requires cooling fans",
          "is_correct": false
        },
        {
          "id": "iot-embedded-6-d",
          "option_text": "An MCU lacks arithmetic logic units (ALU)",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-7",
      "question_text": "What does the term \"ADC\" represent in embedded sensor signal acquisition?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-7-a",
          "option_text": "Analog-to-Digital Converter",
          "is_correct": true
        },
        {
          "id": "iot-embedded-7-b",
          "option_text": "Asynchronous Data Controller",
          "is_correct": false
        },
        {
          "id": "iot-embedded-7-c",
          "option_text": "Automated Device Calibrator",
          "is_correct": false
        },
        {
          "id": "iot-embedded-7-d",
          "option_text": "Auxiliary Direct Channel",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-8",
      "question_text": "In embedded C/C++, why is the 'volatile' keyword applied to a hardware register variable?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-8-a",
          "option_text": "It instructs the compiler not to optimize reads/writes because the value can change outside program flow",
          "is_correct": true
        },
        {
          "id": "iot-embedded-8-b",
          "option_text": "It stores the variable permanently in read-only Flash memory",
          "is_correct": false
        },
        {
          "id": "iot-embedded-8-c",
          "option_text": "It encrypts the variable using hardware AES-128",
          "is_correct": false
        },
        {
          "id": "iot-embedded-8-d",
          "option_text": "It prevents multiple threads from accessing the variable concurrently",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-9",
      "question_text": "Which unlicensed sub-GHz ISM frequency band is standardly allocated for LoRaWAN deployments in Europe?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-9-a",
          "option_text": "868 MHz",
          "is_correct": true
        },
        {
          "id": "iot-embedded-9-b",
          "option_text": "2.4 GHz",
          "is_correct": false
        },
        {
          "id": "iot-embedded-9-c",
          "option_text": "5.8 GHz",
          "is_correct": false
        },
        {
          "id": "iot-embedded-9-d",
          "option_text": "433 GHz",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-10",
      "question_text": "Why is MQTT significantly more power-efficient than standard HTTP for battery-powered IoT devices?",
      "difficulty": "easy",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-10-a",
          "option_text": "It has a compact 2-byte fixed header and keeps a persistent TCP connection alive without repeated handshakes",
          "is_correct": true
        },
        {
          "id": "iot-embedded-10-b",
          "option_text": "It transmits data exclusively over analog radio frequencies without IP packets",
          "is_correct": false
        },
        {
          "id": "iot-embedded-10-c",
          "option_text": "It eliminates the need for any network transport layer",
          "is_correct": false
        },
        {
          "id": "iot-embedded-10-d",
          "option_text": "It disables data encryption to save battery",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-11",
      "question_text": "In the I2C (Inter-Integrated Circuit) bus protocol, how many physical signal lines are required?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-11-a",
          "option_text": "Two: Serial Data (SDA) and Serial Clock (SCL)",
          "is_correct": true
        },
        {
          "id": "iot-embedded-11-b",
          "option_text": "Four: MOSI, MISO, SCK, and CS",
          "is_correct": false
        },
        {
          "id": "iot-embedded-11-c",
          "option_text": "One: Single bidirectional wire without clock",
          "is_correct": false
        },
        {
          "id": "iot-embedded-11-d",
          "option_text": "Eight: 8-bit parallel bus lines",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-12",
      "question_text": "How does the SPI (Serial Peripheral Interface) protocol achieve simultaneous full-duplex communication?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-12-a",
          "option_text": "Through dedicated unidirectional MOSI (Master Out Slave In) and MISO (Master In Slave Out) lines",
          "is_correct": true
        },
        {
          "id": "iot-embedded-12-b",
          "option_text": "By modulating clock phase on a single shared wire",
          "is_correct": false
        },
        {
          "id": "iot-embedded-12-c",
          "option_text": "Using frequency division multiplexing over radio",
          "is_correct": false
        },
        {
          "id": "iot-embedded-12-d",
          "option_text": "By polling devices sequentially in half-duplex slots",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-13",
      "question_text": "What is the critical function of a hardware Watchdog Timer (WDT) in unattended embedded systems?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-13-a",
          "option_text": "Automatically triggering a hardware reset if the software freezes or fails to kick/service the timer",
          "is_correct": true
        },
        {
          "id": "iot-embedded-13-b",
          "option_text": "Measuring high-precision real-world wall clock timestamps",
          "is_correct": false
        },
        {
          "id": "iot-embedded-13-c",
          "option_text": "Throttling the CPU clock speed during elevated thermal events",
          "is_correct": false
        },
        {
          "id": "iot-embedded-13-d",
          "option_text": "Monitoring network bandwidth usage for billing purposes",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-14",
      "question_text": "In FreeRTOS, what scheduling paradigm is used by default for task execution?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-14-a",
          "option_text": "Preemptive priority-based scheduling with time-slicing for equal priority tasks",
          "is_correct": true
        },
        {
          "id": "iot-embedded-14-b",
          "option_text": "Completely non-preemptive cooperative FIFO scheduling",
          "is_correct": false
        },
        {
          "id": "iot-embedded-14-c",
          "option_text": "Shortest Job First without priority preemption",
          "is_correct": false
        },
        {
          "id": "iot-embedded-14-d",
          "option_text": "Random lottery scheduling",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-15",
      "question_text": "Which MQTT Quality of Service (QoS) tier guarantees that a message is delivered 'exactly once' using a four-step handshake?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-15-a",
          "option_text": "QoS 2",
          "is_correct": true
        },
        {
          "id": "iot-embedded-15-b",
          "option_text": "QoS 0",
          "is_correct": false
        },
        {
          "id": "iot-embedded-15-c",
          "option_text": "QoS 1",
          "is_correct": false
        },
        {
          "id": "iot-embedded-15-d",
          "option_text": "QoS 3",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-16",
      "question_text": "Why are pull-up or pull-down resistors necessary on microcontroller digital input pins?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-16-a",
          "option_text": "To define a stable high or logic state and eliminate indeterminate floating voltage states",
          "is_correct": true
        },
        {
          "id": "iot-embedded-16-b",
          "option_text": "To step down 230V AC current to 3.3V DC logic levels",
          "is_correct": false
        },
        {
          "id": "iot-embedded-16-c",
          "option_text": "To speed up the crystal oscillator clock frequency",
          "is_correct": false
        },
        {
          "id": "iot-embedded-16-d",
          "option_text": "To filter out all electromagnetic microwave emissions",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-17",
      "question_text": "What is Pulse Width Modulation (PWM) primarily utilized for in embedded motor and LED control?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-17-a",
          "option_text": "Simulating variable analog output voltages by altering the duty cycle of a rapid digital square wave",
          "is_correct": true
        },
        {
          "id": "iot-embedded-17-b",
          "option_text": "Compressing digital sensor logs before flash storage",
          "is_correct": false
        },
        {
          "id": "iot-embedded-17-c",
          "option_text": "Synchronizing asynchronous serial baud rates",
          "is_correct": false
        },
        {
          "id": "iot-embedded-17-d",
          "option_text": "Modulating audio carrier frequencies for FM radio transmission",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-18",
      "question_text": "What is the key advantage of implementing Over-the-Air (OTA) firmware update capabilities in deployed IoT fleets?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-18-a",
          "option_text": "Enabling remote patching of vulnerabilities and software enhancements without physical hardware access",
          "is_correct": true
        },
        {
          "id": "iot-embedded-18-b",
          "option_text": "Doubling the physical flash storage capacity of the device",
          "is_correct": false
        },
        {
          "id": "iot-embedded-18-c",
          "option_text": "Allowing microcontrollers to run without an operational power supply",
          "is_correct": false
        },
        {
          "id": "iot-embedded-18-d",
          "option_text": "Eliminating the need for unit testing before firmware releases",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-19",
      "question_text": "Which protocol designed by the IETF implements a lightweight RESTful binary model over UDP for constrained nodes?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-19-a",
          "option_text": "CoAP (Constrained Application Protocol)",
          "is_correct": true
        },
        {
          "id": "iot-embedded-19-b",
          "option_text": "BGP",
          "is_correct": false
        },
        {
          "id": "iot-embedded-19-c",
          "option_text": "SNMPv1",
          "is_correct": false
        },
        {
          "id": "iot-embedded-19-d",
          "option_text": "WebSockets",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-20",
      "question_text": "What is the primary constraint when executing code inside an Interrupt Service Routine (ISR)?",
      "difficulty": "medium",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-20-a",
          "option_text": "Execution time must be extremely fast; blocking calls, delays, and memory allocations must be avoided",
          "is_correct": true
        },
        {
          "id": "iot-embedded-20-b",
          "option_text": "It must allocate at least 1MB of heap space for telemetry",
          "is_correct": false
        },
        {
          "id": "iot-embedded-20-c",
          "option_text": "It can only be written in pure assembly language",
          "is_correct": false
        },
        {
          "id": "iot-embedded-20-d",
          "option_text": "It must execute a full network HTTP POST request",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-21",
      "question_text": "When putting an ESP32 or STM32 into 'Deep Sleep' mode, what subsystem typically remains awake to monitor wake-up events?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-21-a",
          "option_text": "The RTC (Real-Time Clock) controller and ULP (Ultra-Low Power) coprocessor",
          "is_correct": true
        },
        {
          "id": "iot-embedded-21-b",
          "option_text": "The primary dual-core Xtensa CPU running at maximum frequency",
          "is_correct": false
        },
        {
          "id": "iot-embedded-21-c",
          "option_text": "The Wi-Fi 802.11 baseband radio transmitter",
          "is_correct": false
        },
        {
          "id": "iot-embedded-21-d",
          "option_text": "The external high-speed SPI Flash memory controller",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-22",
      "question_text": "In IoT and RTOS environments, what is 'Priority Inversion' and how is it mitigated?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-22-a",
          "option_text": "A high-priority task is blocked by a low-priority task holding a mutex; mitigated via Priority Inheritance",
          "is_correct": true
        },
        {
          "id": "iot-embedded-22-b",
          "option_text": "A low-priority task executes faster than high-priority tasks; mitigated by lowering clock speed",
          "is_correct": false
        },
        {
          "id": "iot-embedded-22-c",
          "option_text": "Interrupts trigger in reverse alphabetical order; mitigated by sorting interrupt vector tables",
          "is_correct": false
        },
        {
          "id": "iot-embedded-22-d",
          "option_text": "Tasks run out of stack memory; mitigated by doubling heap partition size",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-23",
      "question_text": "What cryptographic security component provides a Hardware Root of Trust and tamper-resistant key storage in IoT?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-23-a",
          "option_text": "Secure Element (e.g. ATECC608A / TPM)",
          "is_correct": true
        },
        {
          "id": "iot-embedded-23-b",
          "option_text": "Software base64 encoder",
          "is_correct": false
        },
        {
          "id": "iot-embedded-23-c",
          "option_text": "CRC32 parity check register",
          "is_correct": false
        },
        {
          "id": "iot-embedded-23-d",
          "option_text": "Read-only SD card adapter",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-24",
      "question_text": "How does Direct Memory Access (DMA) drastically improve peripheral throughput in embedded systems?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-24-a",
          "option_text": "It transfers bytes directly between peripherals and SRAM without consuming CPU instruction cycles",
          "is_correct": true
        },
        {
          "id": "iot-embedded-24-b",
          "option_text": "It overclocks the memory bus voltage beyond physical silicon ratings",
          "is_correct": false
        },
        {
          "id": "iot-embedded-24-c",
          "option_text": "It converts serial UART bytes into parallel optical beams",
          "is_correct": false
        },
        {
          "id": "iot-embedded-24-d",
          "option_text": "It disables RAM parity checks to eliminate clock latency",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-25",
      "question_text": "Which transport security protocol provides TLS equivalent encryption specifically tailored for UDP datagram protocols like CoAP?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-25-a",
          "option_text": "DTLS (Datagram Transport Layer Security)",
          "is_correct": true
        },
        {
          "id": "iot-embedded-25-b",
          "option_text": "WPA2-Enterprise",
          "is_correct": false
        },
        {
          "id": "iot-embedded-25-c",
          "option_text": "IPsec in tunnel mode only",
          "is_correct": false
        },
        {
          "id": "iot-embedded-25-d",
          "option_text": "SSH-2 over TCP",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-26",
      "question_text": "According to the Nyquist-Shannon sampling theorem, what is required when sampling an analog signal with frequency f_max via ADC?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-26-a",
          "option_text": "Sampling frequency f_s must be strictly greater than 2 * f_max to avoid signal aliasing",
          "is_correct": true
        },
        {
          "id": "iot-embedded-26-b",
          "option_text": "Sampling frequency must equal exactly f_max / 2",
          "is_correct": false
        },
        {
          "id": "iot-embedded-26-c",
          "option_text": "Signal amplitude must be converted to 64-bit floating point prior to sampling",
          "is_correct": false
        },
        {
          "id": "iot-embedded-26-d",
          "option_text": "ADC conversion time must be zero nanoseconds",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-27",
      "question_text": "What does the Adaptive Data Rate (ADR) mechanism dynamically adjust in LoRaWAN networks?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-27-a",
          "option_text": "Spreading Factor (SF) and RF transmit power based on signal-to-noise ratio (SNR) to optimize battery life",
          "is_correct": true
        },
        {
          "id": "iot-embedded-27-b",
          "option_text": "The physical carrier frequency between 433 MHz and 5.8 GHz",
          "is_correct": false
        },
        {
          "id": "iot-embedded-27-c",
          "option_text": "The baud rate of the microcontroller's UART console port",
          "is_correct": false
        },
        {
          "id": "iot-embedded-27-d",
          "option_text": "The Wi-Fi SSID and pre-shared network key",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-28",
      "question_text": "In 32-bit ARM Cortex-M microcontrollers, what condition triggers a Hardware UsageFault or BusFault during pointer dereference?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-28-a",
          "option_text": "Unaligned memory access on instructions that mandate word-boundary alignment, or accessing non-existent memory",
          "is_correct": true
        },
        {
          "id": "iot-embedded-28-b",
          "option_text": "Writing a logic '1' to an unconfigured GPIO output pin",
          "is_correct": false
        },
        {
          "id": "iot-embedded-28-c",
          "option_text": "Calling a static inline function from an ISR",
          "is_correct": false
        },
        {
          "id": "iot-embedded-28-d",
          "option_text": "Executing a floating-point multiplication on an FPU core",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-29",
      "question_text": "What is the primary difference between Edge Computing and Cloud Computing in an industrial IoT (IIoT) ecosystem?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-29-a",
          "option_text": "Edge computing processes telemetry locally close to the sensor for ultra-low latency; cloud computing provides centralized heavy analytics",
          "is_correct": true
        },
        {
          "id": "iot-embedded-29-b",
          "option_text": "Edge computing requires million-dollar supercomputers at each sensor node",
          "is_correct": false
        },
        {
          "id": "iot-embedded-29-c",
          "option_text": "Cloud computing only works over wired RS-485 serial cables",
          "is_correct": false
        },
        {
          "id": "iot-embedded-29-d",
          "option_text": "Edge computing does not allow microcontrollers to run any firmware",
          "is_correct": false
        }
      ]
    },
    {
      "id": "iot-embedded-30",
      "question_text": "Which hardware circuit protection component suppresses transient high-voltage electrostatic discharge (ESD) spikes on external sensor lines?",
      "difficulty": "hard",
      "marks": 1,
      "options": [
        {
          "id": "iot-embedded-30-a",
          "option_text": "TVS (Transient Voltage Suppression) Diodes",
          "is_correct": true
        },
        {
          "id": "iot-embedded-30-b",
          "option_text": "Electrolytic filter capacitors connected in series",
          "is_correct": false
        },
        {
          "id": "iot-embedded-30-c",
          "option_text": "Silicon controlled rectifiers (SCR) in reverse bias",
          "is_correct": false
        },
        {
          "id": "iot-embedded-30-d",
          "option_text": "Step-up autotransformers",
          "is_correct": false
        }
      ]
    }
  ]
};

export const ALIAS_MAP: Record<string, string> = {
  // Software & Web Development
  "web-development": "full-stack-web-development",
  "web-dev": "full-stack-web-development",
  "fullstack": "full-stack-web-development",
  "full-stack": "full-stack-web-development",
  "full-stack-web-development": "full-stack-web-development",
  "frontend": "full-stack-web-development",
  "backend": "full-stack-web-development",
  "javascript": "full-stack-web-development",
  "typescript": "full-stack-web-development",
  "react": "full-stack-web-development",
  "nextjs": "full-stack-web-development",
  "angular": "full-stack-web-development",
  "vue": "full-stack-web-development",
  "tailwind": "full-stack-web-development",
  "nodejs": "full-stack-web-development",
  "node": "full-stack-web-development",
  "php": "full-stack-web-development",
  "swift": "full-stack-web-development",
  "flutter": "full-stack-web-development",
  "react-native": "full-stack-web-development",

  // Programming Languages
  "python": "python-programming",
  "python-programming": "python-programming",
  "py": "python-programming",
  "django": "python-programming",
  "fastapi": "python-programming",
  "java": "java-backend-architecture",
  "java-backend-architecture": "java-backend-architecture",
  "spring": "java-backend-architecture",
  "springboot": "java-backend-architecture",
  "kotlin": "java-backend-architecture",
  "cpp": "cpp",
  "c": "cpp",
  "csharp": "cpp",
  "golang": "cpp",
  "go": "cpp",
  "rust": "cpp",

  // DSA & Computer Science
  "dsa": "dsa",
  "data-structures": "dsa",
  "algorithms": "dsa",
  "data-structures-algorithms": "dsa",
  "computer-science": "computer-science",
  "cs": "computer-science",
  "sql-databases": "computer-science",
  "sql": "computer-science",
  "mongodb": "computer-science",
  "redis": "computer-science",
  "blockchain": "computer-science",

  // AI & Data
  "ai-ml": "ai-ml",
  "ai": "ai-ml",
  "ml": "ai-ml",
  "artificial-intelligence": "ai-ml",
  "machine-learning": "ai-ml",
  "data-science": "ai-ml",
  "data-science-machine-learning": "ai-ml",
  "data-science-analytics": "ai-ml",
  "data-analytics": "ai-ml",
  "prompt-engineering": "prompt-engineering",
  "prompt": "prompt-engineering",
  "generative-ai": "prompt-engineering",
  "genai": "prompt-engineering",
  "llm": "prompt-engineering",
  "agentic-ai": "prompt-engineering",

  // Cloud & DevOps
  "cloud": "cloud-devops",
  "cloud-computing": "cloud-devops",
  "devops": "cloud-devops",
  "cloud-devops": "cloud-devops",
  "aws": "cloud-devops",
  "azure": "cloud-devops",
  "gcp": "cloud-devops",
  "docker": "cloud-devops",
  "kubernetes": "cloud-devops",
  "linux": "cloud-devops",
  "devops-ci-cd": "cloud-devops",

  // Cybersecurity
  "cyber-security": "cybersecurity-ethical-hacking",
  "cybersecurity": "cybersecurity-ethical-hacking",
  "security": "cybersecurity-ethical-hacking",
  "ethical-hacking": "cybersecurity-ethical-hacking",
  "cybersecurity-ethical-hacking": "cybersecurity-ethical-hacking",

  // Core Engineering Disciplines
  "mechanical-engineering": "mechanical-engineering",
  "mech-eng": "mechanical-engineering",
  "mechanical": "mechanical-engineering",
  "core-engineering": "core-engineering",
  "civil-engineering": "civil-engineering",
  "civil-eng": "civil-engineering",
  "civil": "civil-engineering",
  "structural-engineering": "civil-engineering",
  "electrical-engineering": "electrical-engineering",
  "eee-eng": "electrical-engineering",
  "electrical": "electrical-engineering",
  "power-systems": "electrical-engineering",
  "chemical-engineering": "chemical-engineering",
  "chemical-eng": "chemical-engineering",
  "chemical": "chemical-engineering",
  "aerospace-engineering": "aerospace-engineering",
  "aerospace-automobile": "aerospace-engineering",
  "aerospace": "aerospace-engineering",
  "automobile": "aerospace-engineering",
  "industrial-engineering": "mechanical-engineering",
  "robotics-engineering": "robotics-engineering",
  "robotics": "robotics-engineering",
  "robot": "robotics-engineering",
  "petroleum-engineering": "petroleum-engineering",
  "petroleum": "petroleum-engineering",
  "oil-gas": "petroleum-engineering",
  "marine-engineering": "marine-engineering",
  "marine": "marine-engineering",
  "naval-architecture": "marine-engineering",
  "biomedical-engineering": "biomedical-engineering",
  "biomedical": "biomedical-engineering",
  "environmental-engineering": "environmental-engineering",
  "environmental": "environmental-engineering",
  "architectural-engineering": "architectural-engineering",
  "architectural": "architectural-engineering",
  "architecture": "architectural-engineering",
  "biotechnology": "biotechnology",
  "biotech": "biotechnology",
  "bioinformatics": "biotechnology",
  "biotech-eng": "biotechnology",
  "iot-embedded": "iot-embedded",
  "iot": "iot-embedded",
  "embedded-systems": "iot-embedded",
  "electronics-communication": "iot-embedded",
  "ece-eng": "iot-embedded",

  // Creative & Design
  "ui-ux-design": "ui-ux-design",
  "ui-ux": "ui-ux-design",
  "product-management": "ui-ux-design",
  "graphic-design": "ui-ux-design",
  "graphic-media": "ui-ux-design",
  "technical-writing": "ui-ux-design",
  "fashion-design": "fashion-design",
  "fashion": "fashion-design",
  "fashion-designing": "fashion-design",
  "film-production": "film-production",
  "film": "film-production",
  "cinema": "film-production",
  "cinematography": "film-production",
  "interior-design": "interior-design",
  "interior": "interior-design",
  "game-development": "game-development",
  "game-dev": "game-development",
  "gaming": "game-development",

  // Business & Management
  "business-management": "business-management",
  "mba-mgmt": "business-management",
  "finance-accounting": "business-management",
  "finance-acc": "business-management",
  "human-resources": "business-management",
  "hr-talent": "business-management",
  "digital-marketing": "business-management",
  "supply-chain-operations": "business-management",
  "sales-business-development": "business-management"
};


function synthesizeDomainQuestions(domainName?: string, domainSlug?: string, targetCount: number = 30): any[] {
  const cleanTitle = domainName && domainName.trim() 
    ? domainName.trim().replace(/\s*\([^)]*\)/g, '')
    : (domainSlug || 'Technical Domain').replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());

  const slug = (cleanTitle + ' ' + (domainSlug || '')).toLowerCase();

  const isSoftwareIT = /software|code|program|web|cloud|data|cyber|security|ai|machine learning|developer|backend|frontend|devops|network|database|linux|docker|python|java|javascript|algorithm|computing/i.test(slug);
  const isEngineeringPhysical = /engineering|mechanic|civil|electrical|electronic|robot|aerospace|automobile|chemical|petroleum|marine|hardware|structural|manufacturing|material|industrial|vlsi|embedded/i.test(slug);
  const isBusinessCommerce = /business|finance|management|marketing|sales|commerce|accounting|mba|bba|hr|talent|supply chain|logistics|operation|economics|market|banking/i.test(slug);
  const isDesignCreative = /design|ui|ux|art|media|film|video|cinema|fashion|interior|animation|graphic|creative|audio|music|photography|architecture/i.test(slug);
  const isHealthLifeScience = /bio|chem|medical|health|pharma|clinical|genetic|hospital|nursing|doctor|anatomy|physiology|biomed|drug|disease|dental|pharmacy/i.test(slug);

  let templates: any[] = [];

  if (isSoftwareIT) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what is the primary architectural purpose of applying the Single Responsibility Principle (SRP)?',
        correct: 'Ensuring that a module, class, or service has only one reason to change, minimizing ripple effects from modifications',
        distractors: [
          'Combining all business and database operations into a single massive monolithic function',
          'Eliminating the necessity for continuous integration and automated testing',
          'Forcing all asynchronous network requests to execute on a single thread'
        ]
      },
      {
        q: 'When optimizing performance in ' + cleanTitle + ' systems, which strategy yields the most predictable latency and throughput under high load?',
        correct: 'Profiling execution bottlenecks and implementing non-blocking asynchronous operations with optimized multi-tier caching',
        distractors: [
          'Increasing recursive call depth without base condition termination',
          'Disabling all compiler and interpreter optimization flags',
          'Storing all operational state in flat temporary text files without indexing'
        ]
      },
      {
        q: 'Which of the following represents a critical security vulnerability specifically addressed in robust ' + cleanTitle + ' implementations?',
        correct: 'Input validation bypass, insecure deserialization, SQL/command injection, and unauthorized privilege escalation',
        distractors: [
          'Using strict cryptographic protocols with SHA-256 and TLS 1.3',
          'Enforcing role-based access control (RBAC) across all service endpoints',
          'Automating dependency vulnerability scanning during build cycles'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how is transactional data consistency standardly preserved across distributed microservices without distributed locks?',
        correct: 'Using the Saga pattern (orchestrated or choreographed) with compensating rollback transactions and idempotent message handling',
        distractors: [
          'By allowing arbitrary asynchronous writes without conflict resolution',
          'By resetting the system clock after every concurrent write',
          'By storing state exclusively in local volatile memory registers'
        ]
      },
      {
        q: 'What is the industry best practice for handling unhandled exceptions and failovers in ' + cleanTitle + ' production environments?',
        correct: 'Structured telemetry logging, circuit breaker patterns, automated health checks, and graceful service degradation',
        distractors: [
          'Silently suppressing error logs and halting execution indefinitely',
          'Terminating the hosting infrastructure immediately upon receiving a non-fatal warning',
          'Exposing raw stack traces and internal secrets directly to end users'
        ]
      },
      {
        q: 'When conducting automated testing for ' + cleanTitle + ' applications, which layer validates complete end-to-end user workflows against production-like environments?',
        correct: 'End-to-End (E2E) integration test suites simulating real user journeys and service dependencies',
        distractors: [
          'Static code linting without executing any runtime assertions',
          'Manual random clicking without recording test outcomes or coverage metrics',
          'Testing only deprecated functions that are no longer accessible to clients'
        ]
      },
      {
        q: 'Which metric is most crucial when benchmarking scalability and load handling in ' + cleanTitle + ' infrastructure?',
        correct: '99th percentile (p99) response latency, throughput (requests/sec), and resource saturation limits',
        distractors: [
          'Total number of comments written in source code files',
          'Color depth of graphical user interface assets',
          'Alphabetical length of database column names'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what role does decoupled message queuing (such as Kafka or RabbitMQ) play in system resilience?',
        correct: 'It absorbs traffic spikes, prevents downstream backpressure bottlenecks, and decouples producer-consumer availability',
        distractors: [
          'It guarantees that every request must wait synchronously for all background jobs',
          'It doubles the memory consumption of every single thread',
          'It prevents services from ever restarting in the event of an OS reboot'
        ]
      },
      {
        q: 'When refactoring legacy code in ' + cleanTitle + ', which engineering principle ensures maintainability without breaking backward compatibility?',
        correct: 'Adhering to SOLID principles, versioned API contracts, and high regression test coverage before refactoring',
        distractors: [
          'Deleting all existing unit tests to speed up the refactoring process',
          'Combining multiple unrelated business functions into a single 5,000-line function',
          'Hardcoding database credentials directly inside the refactored modules'
        ]
      },
      {
        q: 'Which of the following accurately describes modern lifecycle management of resources in ' + cleanTitle + ' frameworks?',
        correct: 'Deterministic allocation, automatic garbage collection/RAII, and explicit connection pooling with cleanup hooks',
        distractors: [
          'Opening endless file handles and database connections without ever closing them',
          'Relying on hardware power cycling to clean up dangling system threads',
          'Allocating unbounded memory buffers without limits or eviction policies'
        ]
      }
    ];
  } else if (isEngineeringPhysical) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what is the primary engineering significance of calculating the Factor of Safety (FOS) relative to material yield strength?',
        correct: 'Ensures the structure or component operates safely under maximum expected loads without experiencing permanent plastic deformation or failure',
        distractors: [
          'Guarantees that material mass will double under continuous dynamic loading',
          'Allows all quality control testing and regulatory inspections to be eliminated',
          'Forces the system to operate at 100% mechanical efficiency with zero thermal loss'
        ]
      },
      {
        q: 'In ' + cleanTitle + ' systems, which fundamental conservation law dictates that the total energy entering a control volume must equal the energy leaving plus accumulation?',
        correct: 'First Law of Thermodynamics (Conservation of Energy)',
        distractors: [
          "Bernoulli's Frictionless Surface Hypothesis",
          "Newton's Gravitational Inverse-Square Principle",
          "Hooke's Modulus of Elastic Deflection"
        ]
      },
      {
        q: 'When conducting Failure Mode and Effects Analysis (FMEA) in ' + cleanTitle + ', how is the Risk Priority Number (RPN) quantified?',
        correct: 'As the mathematical product of Severity, Occurrence probability, and Detection rating (RPN = S x O x D)',
        distractors: [
          'The total financial cost of scrapping the production line',
          'The ratio of shear stress to thermal expansion coefficient',
          'The operating hours remaining before preventative lubrication is scheduled'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', which nondestructive testing (NDT) method is standardly used to detect internal volumetric flaws in critical metallic components?',
        correct: 'Ultrasonic Testing (UT) or Industrial Radiographic Testing (RT)',
        distractors: [
          'Destructive Charpy V-notch impact fracturing',
          'High-voltage electrical arcing across open atmosphere',
          'Submerging the entire assembly in concentrated hydrochloric acid'
        ]
      },
      {
        q: 'What role does Geometric Dimensioning and Tolerancing (GD&T) per ASME Y14.5 play in ' + cleanTitle + ' engineering drawings?',
        correct: 'Specifies allowable variations in form, orientation, profile, and location to ensure interchangeable assembly fit',
        distractors: [
          'Restricts all parts to identical arbitrary outer diameters regardless of function',
          'Converts imperial engineering units into optical wavelength ratings',
          'Eliminates the necessity for quality inspection calipers and CMM probes'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how does work hardening (strain hardening) affect the mechanical properties of a metallic material?',
        correct: 'Increases yield strength and hardness while reducing ductility through dislocation entanglement',
        distractors: [
          'Decreases tensile strength while increasing electrical resistivity to zero',
          'Causes the material to melt at room temperature without external heat',
          'Transforms crystalline grains permanently into an amorphous liquid state'
        ]
      },
      {
        q: 'When designing dynamic rotating equipment in ' + cleanTitle + ', what condition occurs when operating speed matches a system natural resonance frequency?',
        correct: 'Critical resonance, resulting in severe amplitude magnification, excessive stress, and catastrophic fatigue vibration',
        distractors: [
          'Hydrodynamic cavitation where static pressure exceeds critical boiling point',
          'Instantaneous thermal equilibrium where all heat dissipation ceases',
          'Complete cancellation of all inertial forces and zero mechanical stress'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary purpose of performing a Finite Element Analysis (FEA) mesh convergence study?',
        correct: 'To verify that stress and displacement results become independent of mesh element size for numerical accuracy',
        distractors: [
          'To reduce computer memory usage by deleting all geometrical boundary conditions',
          'To invert the matrix equations so all output values become positive integers',
          "To bypass the need for physical material properties like Young's modulus"
        ]
      },
      {
        q: 'Which international standard outlines the quality management and operational requirements for manufacturing and engineering in ' + cleanTitle + '?',
        correct: 'ISO 9001 (Quality Management Systems) and industry-specific certifications',
        distractors: [
          'ISO 14001 Environmental Management framework alone',
          'OHSAS 18001 Occupational Safety standard alone',
          'ISO 27001 Information Security Management code'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the core methodology of predictive condition-based maintenance compared to reactive maintenance?',
        correct: 'Continuous monitoring of vibration signatures, thermal imaging, and lubricant degradation to schedule repairs before failure',
        distractors: [
          'Operating equipment continuously until catastrophic structural failure occurs',
          'Replacing all machinery components daily regardless of condition or cost',
          'Disabling all safety emergency shutoff switches to maintain production speed'
        ]
      }
    ];
  } else if (isDesignCreative) {
    templates = [
      {
        q: 'In professional ' + cleanTitle + ', what principle establishes visual equilibrium and harmonious weight distribution across a composition or space?',
        correct: 'Balance (symmetrical, asymmetrical, or radial)',
        distractors: [
          'Linear extrusion along arbitrary orthogonal coordinate axes',
          'Randomization of scale without visual hierarchy',
          'Complete monochromatic saturation across all surfaces'
        ]
      },
      {
        q: 'In visual communication for ' + cleanTitle + ', what does the term "visual hierarchy" dictate regarding user perception?',
        correct: "The deliberate arrangement of scale, contrast, and layout to guide the viewer's attention to key focal points first",
        distractors: [
          'Giving every single element identical size, contrast, and prominence',
          'Hiding key information behind decorative ornamentation',
          'Arranging visual assets strictly in alphabetical order'
        ]
      },
      {
        q: 'In the color theory of ' + cleanTitle + ', what visual effect is achieved by pairing complementary colors on the color wheel?',
        correct: 'Maximum chromatic contrast and vibrant visual energy when placed side-by-side',
        distractors: [
          'Complete neutralization of all visual contrast into muddy gray',
          'Elimination of all light reflection from the surface',
          'Total destruction of material surface integrity'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how does scale and proportion influence human spatial and aesthetic experience?',
        correct: 'Relates physical and visual dimensions harmoniously to human anthropometrics and contextual surroundings',
        distractors: [
          'Enforces microscopic dimensions on all functional components',
          'Prevents any dimensional variation across different product iterations',
          'Requires all objects to adhere strictly to integer millimeter increments'
        ]
      },
      {
        q: 'What is the primary objective of creating rapid iterative prototypes and proof-of-concept mockups in ' + cleanTitle + '?',
        correct: 'To validate form, ergonomics, usability, and material suitability early before committing to full production',
        distractors: [
          'To generate finalized marketing sales packaging before design begins',
          'To eliminate the need for any client feedback or design reviews',
          'To permanently fix the design without possibility of modification'
        ]
      },
      {
        q: 'In typography and layout composition for ' + cleanTitle + ', what is "kerning"?',
        correct: 'The process of adjusting the spacing between individual pairs of characters for proportional optical harmony',
        distractors: [
          'The vertical distance between baseline lines of text',
          'The overall height of capital uppercase letters',
          'The thickness of ink saturation on paper media'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary role of user-centered design (UCD) research methodologies?',
        correct: 'Grounding creative decisions in empirical user behaviors, cognitive pain points, and accessibility standards',
        distractors: [
          'Designing exclusively for the personal preferences of the lead designer',
          'Skipping all user feedback sessions to speed up product launch',
          'Copying competitor visual assets without modification'
        ]
      },
      {
        q: 'Which file format standard preserves infinite geometric scalability without pixelation in ' + cleanTitle + ' vector artwork?',
        correct: 'SVG (Scalable Vector Graphics) and vector EPS/PDF formats',
        distractors: [
          'Standard compressed raster JPEG',
          'Animated GIF with 256 color limit',
          'Raw BMP uncompressed bitmap'
        ]
      },
      {
        q: 'In professional ' + cleanTitle + ' asset preparation, what color model is standard for commercial 4-color offset printing?',
        correct: 'CMYK (Cyan, Magenta, Yellow, Key/Black) subtractive model',
        distractors: [
          'RGB (Red, Green, Blue) additive monitor model',
          'Hexadecimal digital screen codes',
          'HSL luminance-only channel mode'
        ]
      },
      {
        q: 'In design systems for ' + cleanTitle + ', what is the main benefit of implementing a centralized token and component library?',
        correct: 'Ensures visual and behavioral consistency across touchpoints, speeds up iteration, and reduces design debt',
        distractors: [
          'Forces all layouts to use identical photographic assets',
          'Prevents any future design updates or brand refreshes',
          'Triples the build time of digital deliverables'
        ]
      }
    ];
  } else if (isBusinessCommerce) {
    templates = [
      {
        q: 'In ' + cleanTitle + ', what financial metric evaluates investment profitability by calculating the ratio of net profit to initial invested capital?',
        correct: 'Return on Investment (ROI)',
        distractors: [
          'Gross Operating Expense Ratio (GOER)',
          'Static Liquidity Amortization Index',
          'Total Book Value Depreciation Factor'
        ]
      },
      {
        q: 'In strategic ' + cleanTitle + ', what is the governing objective of conducting a SWOT analysis?',
        correct: 'To systematically identify internal Strengths and Weaknesses alongside external Opportunities and Threats',
        distractors: [
          'To calculate federal corporate tax liability for quarterly filing',
          'To audit daily employee timecard punch clock stamps',
          'To benchmark warehouse inventory pallet stacking limits'
        ]
      },
      {
        q: 'In operational ' + cleanTitle + ', what management philosophy focuses on eliminating non-value-adding waste (Muda) and continuous incremental improvement (Kaizen)?',
        correct: 'Lean Management',
        distractors: [
          'Chaotic Task Scheduling without prioritization',
          'Unconstrained Inventory Hoarding methodology',
          'Zero-Documentation ad-hoc operational policy'
        ]
      },
      {
        q: 'In commercial ' + cleanTitle + ', what key performance indicator (KPI) measures the total cost incurred by an organization to acquire a single paying customer?',
        correct: 'Customer Acquisition Cost (CAC)',
        distractors: [
          'Customer Lifetime Valuation (LTV)',
          'Net Promoter Score (NPS)',
          'Monthly Recurring Revenue (MRR)'
        ]
      },
      {
        q: 'In financial decision making for ' + cleanTitle + ', what capital budgeting metric discounts future cash flows back to present value using a hurdle rate?',
        correct: 'Net Present Value (NPV)',
        distractors: [
          'Simple Accounting Payback Period without interest',
          'Gross Revenue Run Rate',
          'Earnings Before Interest (EBI)'
        ]
      },
      {
        q: 'In supply chain and inventory management in ' + cleanTitle + ', what inventory model calculates the optimal order quantity that minimizes total holding and ordering costs?',
        correct: 'Economic Order Quantity (EOQ)',
        distractors: [
          'Just-in-Case bulk speculative hoarding',
          'First-Come First-Served allocation schedule',
          'Last-In First-Out price deflation index'
        ]
      },
      {
        q: 'In modern human resource strategy in ' + cleanTitle + ', what structured performance framework aligns individual employee goals with corporate strategic objectives?',
        correct: 'OKRs (Objectives and Key Results) and Balanced Scorecard',
        distractors: [
          'Annual subjective punitive grading without metrics',
          'Seniority-only automatic promotion ladders',
          'Anonymous suggestion box polling'
        ]
      },
      {
        q: 'In marketing and market segmentation in ' + cleanTitle + ', what does dividing a market based on consumer lifestyle, values, and personality traits represent?',
        correct: 'Psychographic Segmentation',
        distractors: [
          'Geographic regional zoning',
          'Firmographic industry SIC coding',
          'Pure demographic age grouping'
        ]
      },
      {
        q: 'In enterprise risk management for ' + cleanTitle + ', how is risk mitigation effectively prioritized across business units?',
        correct: 'By assessing likelihood of occurrence against potential financial and operational impact severity',
        distractors: [
          'By addressing only low-impact trivial issues while ignoring catastrophic risks',
          'By assuming that market volatility will resolve itself without contingency planning',
          'By transferring all operational liability verbally without insurance coverage'
        ]
      },
      {
        q: 'In corporate governance for ' + cleanTitle + ', what fiduciary duty obligates company directors to act in the best financial interests of the corporation and shareholders?',
        correct: 'Duty of Loyalty and Duty of Care',
        distractors: [
          'Duty of Rapid Speculative Trading',
          'Duty of Exclusive Insider Benefit',
          'Duty of Executive Compensation Maximization'
        ]
      }
    ];
  } else if (isHealthLifeScience) {
    templates = [
      {
        q: 'In clinical and laboratory practice in ' + cleanTitle + ', what is the primary purpose of conducting double-blind randomized controlled trials (RCTs)?',
        correct: 'To eliminate observer bias and placebo effect when evaluating therapeutic efficacy and safety outcomes',
        distractors: [
          'To expedite regulatory approvals without testing on patient cohorts',
          'To ensure all study participants receive the identical active chemical compound',
          'To bypass institutional review board (IRB) ethical oversight'
        ]
      },
      {
        q: 'In biological and chemical systems in ' + cleanTitle + ', what thermodynamic property measures the spontaneity of a biochemical reaction at constant temperature and pressure?',
        correct: 'Gibbs Free Energy change (delta G < 0 for exergonic spontaneity)',
        distractors: [
          'Standard enthalpy of vaporization alone',
          'Absolute zero Kelvin thermal barrier',
          'Kinetic activation barrier height alone'
        ]
      },
      {
        q: 'In cellular and molecular protocols in ' + cleanTitle + ', what technique exponentially amplifies specific target DNA sequences in vitro through repeated thermal cycling?',
        correct: 'Polymerase Chain Reaction (PCR)',
        distractors: [
          'Agarose gel electrophoresis without primers',
          'High-performance liquid chromatography (HPLC)',
          'Spectrophotometric optical density measurement'
        ]
      },
      {
        q: 'Under Good Laboratory Practice (GLP) and GMP regulations in ' + cleanTitle + ', what is the governing mandate for all documentation and record-keeping?',
        correct: 'Data must be Attributable, Legible, Contemporaneous, Original, and Accurate (ALCOA+ principles)',
        distractors: [
          'Records can be rewritten from memory at the end of each month',
          'Raw experimental deviations should be erased to preserve clean graphs',
          'Entries may be recorded in pencil without date timestamps'
        ]
      },
      {
        q: 'In pharmacokinetic modeling in ' + cleanTitle + ', what parameter describes the fraction of an administered dose of unchanged drug that reaches systemic circulation?',
        correct: 'Bioavailability (F)',
        distractors: [
          'Volume of distribution (Vd)',
          'Apparent half-life (t1/2)',
          'Total body clearance (CL)'
        ]
      },
      {
        q: 'In immunological diagnostics in ' + cleanTitle + ', which high-throughput assay uses antibody-antigen specificity paired with enzymatic colorimetric detection?',
        correct: 'ELISA (Enzyme-Linked Immunosorbent Assay)',
        distractors: [
          'Mass spectrometry ionization',
          'Sanger chain termination sequencing',
          'Nuclear magnetic resonance spectroscopy'
        ]
      },
      {
        q: 'In sterilization and infection control protocols in ' + cleanTitle + ', what autoclave parameters are standardly used for saturated steam sterilization of surgical equipment?',
        correct: '121 degrees C at 15 psi for at least 15 to 30 minutes (or 134 degrees C for 3-4 minutes)',
        distractors: [
          '60 degrees C water bath for 5 minutes',
          'Ambient air drying at room temperature',
          'Immersion in tap water with mild detergent'
        ]
      },
      {
        q: 'In physiological homeostatic regulation in ' + cleanTitle + ', what feedback mechanism restores blood pH to the physiological range of 7.35 to 7.45?',
        correct: 'Carbonic acid-bicarbonate buffer system coupled with renal and respiratory regulation',
        distractors: [
          'Uncontrolled lactic acid secretion',
          'Immediate shutdown of hepatic circulation',
          'Thermal perspiration without electrolyte exchange'
        ]
      },
      {
        q: 'In biochemical chromatography in ' + cleanTitle + ', which separation technique isolates biomolecules based specifically on their reversible bio-specific binding affinity to immobilized ligands?',
        correct: 'Affinity Chromatography',
        distractors: [
          'Size-exclusion gel permeation chromatography',
          'Reverse-phase hydrophobic interaction chromatography',
          'Cation exchange chromatography'
        ]
      },
      {
        q: 'In bioethics and medical compliance in ' + cleanTitle + ', what fundamental ethical principle requires obtaining voluntary informed consent prior to clinical procedures?',
        correct: 'Autonomy and Respect for Persons',
        distractors: [
          'Paternalistic Institutional Directive',
          'Administrative Convenience Protocol',
          'Mandatory State Enforcement'
        ]
      }
    ];
  } else {
    // Universal Professional, Scientific & Technical Discipline
    templates = [
      {
        q: 'In professional ' + cleanTitle + ' practice, what is the primary purpose of conducting systematic peer review and technical auditing?',
        correct: 'To verify compliance with established industry standards, validate methodologies, and ensure quality outcomes',
        distractors: [
          'To delay operational project timelines indefinitely without evaluation',
          'To replace all technical calculations with unverified assumptions',
          'To conceal methodological defects from regulatory oversight'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how is risk mitigation effectively prioritized during project execution?',
        correct: 'By assessing the likelihood of occurrence against potential impact severity to focus resources on critical hazards',
        distractors: [
          'By addressing only the easiest low-impact concerns while ignoring critical risks',
          'By assuming that unforeseen events will resolve themselves spontaneously',
          'By transferring all liability verbally without written documentation'
        ]
      },
      {
        q: 'What benchmark defines professional excellence and operational integrity in ' + cleanTitle + '?',
        correct: 'High reliability, adherence to ethical codes of conduct, continuous verification, and evidence-based methodologies',
        distractors: [
          'Executing tasks with maximum speed regardless of safety or precision',
          'Working in total isolation without reference to recognized standards',
          'Discarding all historical data and performance metrics'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', what is the primary function of establishing standardized operating procedures (SOPs)?',
        correct: 'Ensuring consistency, repeatability, safety compliance, and defect reduction across operational workflows',
        distractors: [
          'Eliminating the need for employee onboarding and training programs',
          'Preventing any technological upgrades from being adopted in the future',
          'Increasing paperwork to deliberately slow down organizational throughput'
        ]
      },
      {
        q: 'When analyzing experimental or operational data in ' + cleanTitle + ', what statistical metric evaluates the dispersion of data points around the mean?',
        correct: 'Standard Deviation and Variance',
        distractors: [
          'Arithmetic Mean alone',
          'Skewness coefficient alone',
          'Mode frequency alone'
        ]
      },
      {
        q: 'In project management for ' + cleanTitle + ', what technique identifies the longest sequence of dependent activities determining the minimum project duration?',
        correct: 'Critical Path Method (CPM)',
        distractors: [
          'Ad-hoc task assignment lottery',
          'Pareto 80/20 rough estimation',
          'Kanban board WIP limit alone'
        ]
      },
      {
        q: 'In quality assurance in ' + cleanTitle + ', what does the Plan-Do-Check-Act (PDCA / Deming Cycle) represent?',
        correct: 'An iterative four-stage management framework for continuous process improvement and defect reduction',
        distractors: [
          'A one-time emergency crisis response protocol',
          'A financial accounting balance sheet auditing rule',
          'A legal non-disclosure agreement template'
        ]
      },
      {
        q: 'In ' + cleanTitle + ', how are measurement instruments calibrated to guarantee metrological traceability?',
        correct: 'By comparing instrument readings against certified national/international reference standards with documented uncertainty',
        distractors: [
          'By adjusting dials until readings match desired target outcomes',
          'By relying on factory presets without periodic recalibration',
          'By taking the average of unverified consumer gauges'
        ]
      },
      {
        q: 'What is the role of root cause analysis (such as the 5 Whys or Ishikawa Fishbone Diagram) in ' + cleanTitle + '?',
        correct: 'Identifying underlying systemic failure causes to implement permanent corrective and preventive actions (CAPA)',
        distractors: [
          'Assigning immediate personal blame to frontline operators',
          'Treating superficial symptoms without addressing root problems',
          'Filing confidential reports without sharing findings with the engineering team'
        ]
      },
      {
        q: 'In professional ethics and compliance in ' + cleanTitle + ', how should potential conflicts of interest be handled?',
        correct: 'Immediate transparent disclosure to governing bodies and recusal from influenced decision-making processes',
        distractors: [
          'Concealing the conflict until after project completion',
          'Proceeding with personal financial enrichment if unobserved',
          'Transferring the conflict to an unregistered third party'
        ]
      }
    ];
  }

  // 1. Expand with advanced specialized technical questions up to targetCount (at least 30)
  const initialCount = Math.max(1, templates.length);
  const prefixes = [
    'Advanced ' + cleanTitle + ' Application: ',
    'Practical ' + cleanTitle + ' Implementation: ',
    'Industry Standards in ' + cleanTitle + ': ',
    'Performance Optimization in ' + cleanTitle + ': ',
    'Safety & Quality Control in ' + cleanTitle + ': '
  ];

  let pIdx = 0;
  while (templates.length < targetCount) {
    const base = templates[templates.length % initialCount];
    if (!base) break;
    const prefix = prefixes[pIdx % prefixes.length];
    pIdx++;
    templates.push({
      q: prefix + base.q,
      correct: base.correct,
      distractors: base.distractors
    });
  }

  return templates.slice(0, targetCount).map((item, idx) => {
    const opts = [item.correct, ...item.distractors.slice(0, 3)];
    const correctIdx = Math.floor(Math.random() * 4);
    if (correctIdx !== 0) {
      const temp = opts[0];
      opts[0] = opts[correctIdx];
      opts[correctIdx] = temp;
    }
    return {
      q: item.q,
      opts: opts,
      ans: correctIdx
    };
  });
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// In-memory cache for evaluating dynamically synthesized questions
const dynamicAnswerRegistry = new Map<string, string>();

export function getDomainQuestions(domainSlug: string, domainName?: string, targetCount: number = 30): Question[] {
  let cleanSlug = (domainSlug || '').toLowerCase().trim();
  const normalizedDomainName = (domainName || '').toLowerCase().trim();
  const domainNameToSlug = normalizedDomainName.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  if ((cleanSlug === 'others' || cleanSlug === 'custom-topic' || cleanSlug === 'custom' || cleanSlug === 'other' || !cleanSlug) && domainNameToSlug) {
    cleanSlug = domainNameToSlug;
  }
  
  // 1. Check alias map
  let resolvedKey: string = ALIAS_MAP[cleanSlug] || '';
  if (!resolvedKey && domainNameToSlug) {
    resolvedKey = ALIAS_MAP[domainNameToSlug] || '';
  }
  if (!resolvedKey && normalizedDomainName) {
    resolvedKey = ALIAS_MAP[normalizedDomainName] || '';
  }

  // 2. Direct key match in DOMAIN_QUESTIONS
  if (!resolvedKey) {
    if (DOMAIN_QUESTIONS[cleanSlug]) {
      resolvedKey = cleanSlug;
    } else if (domainNameToSlug && DOMAIN_QUESTIONS[domainNameToSlug]) {
      resolvedKey = domainNameToSlug;
    }
  }

  // 3. Fallback to exact key matching without token substring bleed
  if (!resolvedKey) {
    resolvedKey = Object.keys(DOMAIN_QUESTIONS).find(k => {
      if (k === cleanSlug || (domainNameToSlug && k === domainNameToSlug)) return true;
      return false;
    }) || '';
  }
  
  const effectiveTitle = domainName || (domainNameToSlug ? normalizedDomainName : cleanSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
  const requiredCount = Math.max(1, Number(targetCount) || 30);

  let rawList: any[] = [];

  if (resolvedKey && DOMAIN_QUESTIONS[resolvedKey]) {
    rawList = [...DOMAIN_QUESTIONS[resolvedKey]];
  } else {
    resolvedKey = cleanSlug || 'custom-domain';
    const synthesized = synthesizeDomainQuestions(effectiveTitle, cleanSlug, requiredCount);
    rawList = synthesized.map((item: any, sIdx: number) => {
      const qId = `${resolvedKey}-${sIdx + 1}`;
      return {
        id: qId,
        question_text: item.q,
        difficulty: sIdx < 10 ? 'easy' : sIdx < 20 ? 'medium' : 'hard',
        marks: 1,
        options: item.opts.map((optText: string, oIdx: number) => ({
          id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
          option_text: optText,
          is_correct: oIdx === item.ans,
        })),
      };
    });
  }

  // GUARANTEE STRICTLY REQUIRED QUESTION COUNT (COMPULSORILY 30):
  // If rawList has fewer questions than requested, fill the deficit with domain-specific synthesized questions
  if (rawList.length < requiredCount) {
    const deficit = requiredCount - rawList.length;
    const additionalSynthesized = synthesizeDomainQuestions(effectiveTitle, cleanSlug, deficit);
    const convertedExtra = additionalSynthesized.map((item: any, sIdx: number) => {
      const qId = `${resolvedKey}-extra-${sIdx + 1}`;
      return {
        id: qId,
        question_text: item.q,
        difficulty: sIdx < 5 ? 'easy' : sIdx < 10 ? 'medium' : 'hard',
        marks: 1,
        options: item.opts.map((optText: string, oIdx: number) => ({
          id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
          option_text: optText,
          is_correct: oIdx === item.ans,
        })),
      };
    });
    rawList = [...rawList, ...convertedExtra];
  }

  // 1. Randomly shuffle the questions for this domain
  const shuffledQuestions = shuffle(rawList);
  const count = Math.max(1, Math.min(shuffledQuestions.length, requiredCount));
  const selectedRaw = shuffledQuestions.slice(0, count);

  return selectedRaw.map((item: any, idx: number): Question => {
    const qId = item.id || `${resolvedKey}-q-${idx + 1}`;
    const qText = item.question_text || item.q;

    // Normalize options from either format (opts or options)
    let rawOptions: any[] = [];
    if (Array.isArray(item.options) && item.options.length > 0) {
      rawOptions = item.options.slice(0, 4).map((o: any, oIdx: number) => ({
        id: o.id || `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
        question_id: qId,
        option_text: o.option_text || o.text || String(o),
        is_correct: !!o.is_correct
      }));
    } else if (Array.isArray(item.opts)) {
      rawOptions = item.opts.slice(0, 4).map((optText: string, oIdx: number) => ({
        id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
        question_id: qId,
        option_text: optText,
        is_correct: oIdx === (item.ans ?? 0)
      }));
    }

    const correctOpt = rawOptions.find((o: any) => o.is_correct) || rawOptions[0];
    if (correctOpt) {
      const correctOptId = correctOpt.id;
      dynamicAnswerRegistry.set(qId, correctOptId);
    }

    const shuffledOptions: QuestionOption[] = shuffle(rawOptions).map((opt: any, oIdx: number) => ({
      id: String(opt.id),
      question_id: String(opt.question_id || qId),
      option_text: String(opt.option_text || ''),
      option_order: oIdx + 1,
      is_correct: !!opt.is_correct
    }));

    return {
      id: qId,
      tier_label: item.tier_label || (idx < 10 ? 'Fundamentals' : idx < 20 ? 'Core Skills' : 'Advanced Application'),
      domain_id: domainSlug,
      question_text: qText,
      difficulty: (item.difficulty || (idx < 10 ? 'easy' : idx < 20 ? 'medium' : 'hard')) as 'easy' | 'medium' | 'hard',
      marks: 1,
      explanation: 'Technical assessment evaluation',
      active: true,
      display_order: idx + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      options: shuffledOptions
    };
  });
}

export function checkQuestionBankCorrectAnswer(questionId: string, optionId: string): boolean {
  if (!questionId || !optionId) return false;

  // Check dynamic registry first
  if (dynamicAnswerRegistry.has(questionId)) {
    return dynamicAnswerRegistry.get(questionId) === optionId;
  }

  // Authoritative direct lookup across question bank
  for (const questionsList of Object.values(DOMAIN_QUESTIONS)) {
    const q = questionsList.find((item: any) => item.id === questionId);
    if (q && q.options) {
      const opt = q.options.find((o: any) => o.id === optionId);
      if (opt) {
        return !!opt.is_correct;
      }
    }
  }

  // Also check normalized question IDs if slug prefix differs
  for (const questionsList of Object.values(DOMAIN_QUESTIONS)) {
    for (const q of questionsList) {
      if (questionId.endsWith(q.id) || q.id.endsWith(questionId)) {
        const opt = (q.options || []).find((o: any) => o.id === optionId || optionId.endsWith(o.id));
        if (opt) return !!opt.is_correct;
      }
    }
  }

  return false;
}
