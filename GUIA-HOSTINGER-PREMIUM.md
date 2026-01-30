# 🚀 GUIA COMPLETO: SUBIR SITE NA HOSTINGER PREMIUM

## 📋 ÍNDICE
1. [Contratar Plano](#1-contratar-plano-premium)
2. [Configurar Domínio](#2-configurar-domínio)
3. [Fazer Upload](#3-fazer-upload-dos-arquivos)
4. [Ativar SSL](#4-ativar-ssl)
5. [Testar e Publicar](#5-testar-e-publicar)

---

## 1. CONTRATAR PLANO PREMIUM

### Passo 1.1: Acessar Hostinger
- Abra o navegador e vá para: **https://hostinger.com.br**
- Clique em **"Planos"** ou **"Hosting"**

### Passo 1.2: Escolher Plano Premium
- Você verá 3 opções:
  - ❌ **Starter** (não recomendado para seu site)
  - ✅ **Premium** (ESCOLHA ESTE)
  - 💎 **Business** (opcional, se quiser mais recursos)

### Passo 1.3: Configurações do Plano Premium
Clique em **"Escolher Plano"** no Premium e você verá:

**Opções a marcar:**
```
☑️ Período: 12 MESES (mais barato/ano)
   Preço: ~R$99/ano (sem promoção) ou ~R$49/ano (com desconto)

☑️ Domínio GRÁTIS:
   ✅ Se não tem domínio → Registre um novo
   ✅ Se já tem domínio → Escolha "Usar domínio existente"
```

**Domínios recomendados para sua empresa:**
- `devluna.com.br` (melhor opção)
- `devluna.com`
- `agenciadedesign.com.br`

### Passo 1.4: Adicionar ao Carrinho
- Clique em **"Adicionar ao Carrinho"**
- Você verá mais opções (SSL, backup, etc.) - **deixe os padrões marcados**

### Passo 1.5: Pagamento
- Clique em **"Ir para o Checkout"**
- Preencha seus dados:
  - Nome completo
  - Email
  - Telefone
  - CPF/CNPJ
  - Endereço

- Escolha forma de pagamento:
  - 💳 Cartão de crédito (mais rápido)
  - 📱 PIX (instantâneo)
  - 🏦 Boleto (leva dias)

- Clique em **"Finalizar Compra"**

### Passo 1.6: Confirmação
Você receberá um email com:
- ✅ Dados de acesso ao hPanel
- ✅ Dados do domínio
- ✅ Dados FTP (se precisar)

**Salve esses dados em um arquivo seguro!**

---

## 2. CONFIGURAR DOMÍNIO

### Passo 2.1: Acessar hPanel
- Acesse: **https://hpanel.hostinger.com**
- Faça login com seu email e senha (recebidos no email)

### Passo 2.2: Encontrar seu Domínio
- No menu esquerdo, clique em **"Domínios"**
- Você verá seu domínio listado (ex: devluna.com.br)
- Clique sobre o domínio

### Passo 2.3: Apontar para o Hosting
Se o domínio foi registrado NA HOSTINGER (mais comum):
- ✅ Já está configurado automaticamente
- ✅ Vá para próximo passo

Se o domínio foi registrado EM OUTRO LUGAR (ex: registro.br):
- Você precisa copiar os **Nameservers** do hPanel
- Cole os nameservers na configuração do seu registro anterior
- Aguarde 24-48h para propagar

**Nameservers da Hostinger:**
```
ns1.dns-parking.com
ns2.dns-parking.com
```

---

## 3. FAZER UPLOAD DOS ARQUIVOS

### OPÇÃO A: Via Gerenciador de Arquivos (MAIS FÁCIL) ⭐

#### Passo 3A.1: Abrir Gerenciador de Arquivos
- No hPanel, vá em **"Arquivos"** → **"Gerenciador de Arquivos"**
- Você verá uma pasta chamada **`public_html`**
- **Duplo clique** para entrar nela

> ✅ **Se você removeu tudo do gerenciador**: é só reenviar os arquivos listados no passo 3A.3.

#### Passo 3A.2: Limpar a Pasta
Se houver arquivos/pastas antigos:
- Selecione tudo (Ctrl + A)
- Clique em **"Deletar"**
- Confirme a exclusão

#### Passo 3A.3: Fazer Upload
- Clique no botão **"Upload"** (canto superior direito)
- Ou arraste os arquivos para a área indicada

**Arquivos a enviar:**
```
✅ index.html
✅ css/ (pasta completa)
✅ js/ (pasta completa)
✅ public/ (pasta completa com imagens)
✅ favicon.svg (ícone da aba)
```

**NÃO enviar:**
```
❌ assets/
❌ .git/
❌ *.md
```

#### Passo 3A.4: Aguardar Upload
- Barra de progresso aparecerá
- Aguarde até completar (geralmente 2-5 minutos)
- Quando finalizar, aparece ✅ "Upload concluído"

---

### OPÇÃO B: Via FTP (MAIS PROFISSIONAL)

#### Passo 3B.1: Baixar FileZilla
- Acesse: **https://filezilla-project.org/download.php**
- Baixe a versão Windows
- Instale normalmente

#### Passo 3B.2: Pegar Dados FTP no hPanel
- No hPanel, clique em **"Arquivos"** → **"FTP"**
- Você verá:

```
Servidor (Host): ftp.seudominio.com.br
Usuário: seu_usuario_ftp
Senha: sua_senha_ftp
Porta: 21
```

- Copie e salve esses dados

#### Passo 3B.3: Conectar no FileZilla
- Abra o FileZilla
- Na barra superior, preencha:
  - Host: `ftp.seudominio.com.br`
  - Usuário: seu usuário FTP
  - Senha: sua senha FTP
  - Porta: 21

- Clique em **"Conexão Rápida"**

#### Passo 3B.4: Navegar até public_html
- No painel **DIREITO** (servidor remoto):
- Procure por pasta **`public_html`**
- **Duplo clique** para entrar

#### Passo 3B.5: Fazer Upload
- No painel **ESQUERDO** (seu computador):
- Navegue até sua pasta do projeto
- Selecione:
  - `index.html`
  - Pasta `css/`
  - Pasta `js/`
  - Pasta `public/`
  - `favicon.svg`

- **Arraste para o painel direito**
- Aguarde concluir (barra inferior mostra progresso)

---

## 4. ATIVAR SSL (HTTPS)

### Passo 4.1: Acessar SSL no hPanel
- No hPanel, clique em **"Sites"**
- Selecione seu domínio

### Passo 4.2: Instalar Certificado SSL
- Procure a seção **"SSL"**
- Clique em **"Instalar Certificado"** ou **"Gerenciar SSL"**

### Passo 4.3: Escolher SSL Grátis
- Selecione **"Let's Encrypt (Grátis)"**
- Clique em **"Instalar"**
- Aguarde 5-10 minutos

### Passo 4.4: Forçar HTTPS
- Na mesma seção SSL, marque:
  - ☑️ **"Forçar HTTPS"**
  - ☑️ **"Redirect HTTP para HTTPS"**

- Clique em **"Salvar"**

✅ **Pronto! Seu site agora usa HTTPS (seguro)**

---

## 5. TESTAR E PUBLICAR

### Passo 5.1: Acessar seu Site
- Abra uma aba nova no navegador
- Digite seu domínio: **https://seudominio.com.br**
- Pressione ENTER

### Passo 5.2: Verificar se Carregou
Você deve ver:
- ✅ Site carregando normalmente
- ✅ Logo aparecendo (favicon na aba)
- ✅ CSS com cores bonitas
- ✅ Animações funcionando
- ✅ Imagens do portfólio

### Passo 5.3: Testar Funcionalidades
1. **Teste o Menu**
   - Clique em cada link do menu
   - Veja se scrolls funcionam

2. **Teste o Formulário**
   - Vá para seção "Contato"
   - Preencha os campos
   - Clique em "Solicitar Orçamento Grátis"
   - Deve abrir WhatsApp com a mensagem

3. **Teste os Botões**
   - Clique em botões de WhatsApp
   - Clique em "Ver Projetos"
   - Tudo deve funcionar

4. **Teste em Mobile**
   - Aperte F12 (DevTools)
   - Clique no ícone do celular
   - Veja se fica responsivo

### Passo 5.4: Otimizações (OPCIONAL)

#### Ativar Cache
- No hPanel → **Sites** → seu domínio
- Procure **"Cache"**
- Marque ☑️ **"Ativar Cache"**

#### Ativar Compressão GZIP
- No hPanel → **Sites** → seu domínio
- Procure **"Compressão GZIP"**
- Marque ☑️ **"Ativar"**

Isso deixa seu site **3-5x mais rápido!**

---

## 🎯 CHECKLIST FINAL

Antes de divulgar, verifique:

- [ ] Site abre em `https://` (com cadeado)
- [ ] Todas as páginas carregam
- [ ] Imagens aparecem
- [ ] Menu funciona
- [ ] Formulário abre WhatsApp corretamente
- [ ] Botões de WhatsApp funcionam
- [ ] Site fica responsivo no celular
- [ ] Teste em outro navegador (Firefox, Edge)
- [ ] Teste em outro computador/celular
- [ ] Peça a um amigo para acessar e confirmar

---

## ❓ PROBLEMAS COMUNS

### ❌ Erro: "Este site não pode ser alcançado"
**Solução:**
1. Aguarde 24-48h para propagação DNS
2. Limpe cache: Ctrl + Shift + R
3. Verifique se domínio está ativo no hPanel
4. Reinicie o navegador

### ❌ Erro: "Ainda está carregando"
**Solução:**
1. Verifique se upload completou 100%
2. Certifique-se que `index.html` está na raiz de `public_html`
3. Limpe cache do navegador
4. Aguarde mais alguns minutos

### ❌ Imagens não aparecem
**Solução:**
1. Verifique se pasta `public/img/` foi enviada
2. Nomes de arquivos são case-sensitive (maiúscula/minúscula importa!)
3. Não pode ter espaços nos nomes

### ❌ CSS/JavaScript não funciona
**Solução:**
1. Verifique se pastas `css/` e `js/` existem
2. Limpe cache: Ctrl + Shift + R
3. Abra DevTools (F12) e veja aba "Console" por erros

### ❌ HTTPS diz que é inseguro
**Solução:**
1. Aguarde até 24h após ativar SSL
2. Limpe cache
3. Tente em navegador anônimo

---

## 📞 SUPORTE HOSTINGER

Se algo der errado:
- **Chat ao vivo:** Botão de chat no hPanel (24/7)
- **Email:** suporte@hostinger.com.br
- **WhatsApp:** Disponível pelo hPanel

---

## 🎉 PARABÉNS!

**Seu site está no ar! 🚀**

Próximos passos:
1. ✅ Divulgue em redes sociais
2. ✅ Compartilhe o link com amigos
3. ✅ Crie contas no Instagram/Facebook da empresa
4. ✅ Configure Google Analytics (opcional)
5. ✅ Monitore quantos visitantes tem

---

## 💡 DICAS EXTRAS

**Para ganhar mais visibilidade:**

1. **Google Search Console** (Grátis)
   - https://search.google.com/search-console
   - Registre seu site lá
   - Ajuda Google a indexar seu site

2. **Google Analytics** (Grátis)
   - https://analytics.google.com
   - Veja quantos visitantes tem
   - De onde vêm os visitantes
   - Quanto tempo ficam no site

3. **Redes Sociais**
   - Crie Instagram, TikTok, YouTube
   - Poste case studies dos seus projetos
   - Vídeos antes/depois
   - Dicas de web design

4. **WhatsApp Business** (Grátis)
   - Configure para receber leads
   - Respostas automáticas
   - Catálogo de serviços

---

**Dúvidas durante o processo? É só me chamar! 💬**

Good luck! 🚀✨
